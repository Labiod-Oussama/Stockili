import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { grey } from '@mui/material/colors';

const Stat = ({ title, nbr, color, icon }) => {
    return (
        <Grid
            xs={12}
            md={5}
            lg={3.9}
            sx={{ display: 'flex', flexDirection: 'column', p: 4, bgcolor: grey[200], borderBottom:'solid 6px',borderBottomColor:color,borderRadius:'5px' }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant='h4' color={color}>
                    {nbr}
                </Typography>

                <Box sx={{ p: 1, color: 'whitesmoke', bgcolor: color, display: 'flex', alignItems: 'center',borderRadius:'3px' }}>
                    {icon}
                </Box>
            </Box>
            <Typography variant='h5' color={color} fontWeight='bold'>
                {title}
            </Typography>
        </Grid>
    )
}

export default Stat