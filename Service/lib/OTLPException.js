/**
 * @fileoverview OTLPException.js - Middleware for exption handling
 * @param {error} error - The error to convert to string
 * @returns on single string with the error stack
 */
const errorToString = (error) => {
    let tempStack = error.stack;
     tempStack = stack.split('\n');
      
    let errorString = ""
    for (let i = 1; i < stack.length; i++) {
      // delete the default 4 spaces
      stack[i] = stack[i].substring(4);
      // replace the 4 spaces with dots
      errorString += stack[i] + "...."
    }
  
    // delete the last 4 spaces
    errorString = errorString.substring(0, errorString.length - 4);
    return errorString;
}
  
/**
 * Middleware for exption handling 
 * Convert the error to a string and send it to OTLP client as an http header attribute
 * Resend the error to the next middleware
 * @param {request} req - The request
 * @param {response} res - The response
 * @param {next} next - The next middleware
 * @return no-return
 * @throws {error} - The error to handle
 * @example 
 * app.use(OTLPException);
 */
const OTLPException = (req, res, next) => {
    try {
      next();
    } catch (error) {
      const errorString = errorToString(error);
      res.setHeader("ExceptionMessage", errorString);
      next(error);
    }    
};    
  
module.exports = OTLPException;
