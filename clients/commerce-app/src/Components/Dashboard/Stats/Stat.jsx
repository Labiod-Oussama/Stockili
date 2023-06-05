import { Box, Typography } from '@mui/material'
import React from 'react'
import { grey } from '@mui/material/colors';

const Stat = ({ title, nbr, pourcentage, color, icon }) => {
    return (
        <Box
            sx={{ flex: '1 0 10rem', display: 'flex',alignItems:'center', justifyContent: 'space-between', p: 2, bgcolor: grey[300], borderLeft: 'solid 4px', borderLeftColor: color, borderRadius: '5px' }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant='h5' color={color} mb={1}>
                    {nbr}
                </Typography>
                <Typography variant='body2'>
                    {pourcentage} from last week
                </Typography>
            </Box>
            <Box sx={{ width:'30px',height:'30px',p: 1, color: 'whitesmoke', bgcolor: color, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                {icon}
            </Box>

        </Box>
    )
}

export default Stat