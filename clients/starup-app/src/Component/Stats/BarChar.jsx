import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Box } from '@mui/material';
const BarChar = () => {
    const currentMonth=new Date().getMonth();
    const currentYear=new Date().getFullYear();
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aout','September','October','November','December'];
    const value = [10, 12, 2, 10, 4, 3, 1];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
              display: true,
              text:`Stats in ${currentYear}`
            },
        
        },
    };
    return (
        <Box sx={{width:'100%' ,height:'400px',display:'flex',justifyContent:'center'}}>
            <Bar
                options={options}
                data={{
                    labels: [...labels].slice(0,currentMonth+1),
                    datasets: [{
                        label: 'Clients',
                        data: value.slice(0,currentMonth+1).map(val => val),
                        backgroundColor: '#003049',
                         borderRadius:3 
                    }]
                }}
            />
        </Box>
    )
}

export default BarChar