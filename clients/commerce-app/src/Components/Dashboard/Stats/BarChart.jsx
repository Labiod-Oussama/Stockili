import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
const BarChart = () => {
    const currentMonth=new Date().getMonth();
    const currentYear=new Date().getFullYear();
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aout','September','October','November','December'];
    const valueSales = [40, 22, 18, 60, 80, 30, 10];
    const valueVisits = [20, 32, 42, 10, 20, 15, 10];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
              display: true,
              text:'Sales Overview',            
            },
        
        },
    };
    return (
            <Bar
                options={options}
                data={{
                    labels: [...labels].slice(0,currentMonth+1),
                    datasets: [{
                        label: 'Sales',
                        data: valueSales.slice(0,currentMonth+1).map(val => val),
                        backgroundColor: blue[500],
                         borderRadius:5
                    },{
                        label:'Visits',
                        data: valueVisits.slice(0,currentMonth+1).map(val => val),
                        backgroundColor:orange[400],
                        borderRadius:5
                    }]
                }}
            />
    )
}
export default BarChart