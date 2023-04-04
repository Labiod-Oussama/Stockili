// Require dependencies
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const opentelemetry = require("@opentelemetry/api");
const { Resource } = require("@opentelemetry/resources");
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
require("dotenv").config();

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
opentelemetry.diag.setLogger(new opentelemetry.DiagConsoleLogger(), opentelemetry.DiagLogLevel.ERROR);

/**
  * This function is used to set the span attributes
  * @param {span} span - The span to set the attributes on
  * @param {message} message - The message to set the attributes on
  * @param {headerMessage} headerMessage - The header message to set the attributes on
  * @param {OTLPMessage} OTLPMessage - The OTLP message to set the attributes on
  * @return no-return
  */
const spanSet = (span, message, headerMessage, OTLPMessage) => {
  if (message[0] === headerMessage)
    span.setAttribute(OTLPMessage, message[1]);
};

// List logs type
const listHeaderMessage = [
  "InfoMessage",
  "ExceptionMessage",
  "ErrorMessage",
  "WarningMessage",
  "TraceMessage",
  "DebugMessage"
];
const listOTLPMessage = [
  "Info-Message",
  "Exception-Message",
  "Error-Message",
  "Warning-Message",
  "Trace-Message",
  "Debug-Message"
];

// instrumentations
registerInstrumentations({
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-http': {
        enabled: true,
        applyCustomAttributesOnSpan: (span, _, response) => {
          const messages = response._header.split("\r\n");
          for (let i = 0; i < messages.length; i++) {
            const message = messages[i].split(": ");
            for (let i = 0; i < listHeaderMessage.length; i++)
              spanSet(span, message, listHeaderMessage[i], listOTLPMessage[i]);
          }
        }
      }
    })
  ]
});

let serviceName = process.env.SERVICE_NAME;
if (!serviceName) {
  console.log("Service name is not defined, using default service name");
  serviceName = "SHOP";
}

let serviceVersion = process.env.SERVICE_VERSION;
if (!serviceVersion) {
  console.log("Service version is not defined, using default service version");
  serviceVersion = "0.0.1";
}

// Resource name
const resource =
  Resource.default().merge(
    new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
      [SemanticResourceAttributes.SERVICE_VERSION]: serviceVersion
    })
  );

// provider
const provider = new NodeTracerProvider({
  resource,
});

const otlpUrl = process.env.OTLP_URL;
if (!otlpUrl) {
  console.log('OTLP_URL is not set. Defaulting to localhost:4318/v1/traces');
  process.env.OTLP_URL = "http://localhost:4318/v1/traces";
}

// Exporter
const exporter = new OTLPTraceExporter({
  url: process.env.OTLP_URL,
});
const spanProcessor = new BatchSpanProcessor(exporter);
provider.addSpanProcessor(spanProcessor);

// Register the provider
provider.register();
