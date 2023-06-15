import { Box, Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import wave from '../../assets/wave.svg'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';
function Prices({setOpen}) {
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    
    return (
        <Box sx={{ p: { xs: 2, md: 5 }, position: 'relative' }}>
            <Typography variant={isMatchedPhone ? 'h4' : 'h3'} color='primary.main' sx={{ textAlign: 'center', fontFamily: 'Yusei Magic', mb: 5 }}>
                Our Plans
            </Typography>
            <Grid container spacing={4}>
                <Grid xs={12} md={6} lg={6}>
                    <Paper elevation={4} sx={{ bgcolor: 'primary.grey', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: '8px' }}>
                        <Typography variant='h5' color='primary' sx={{ p: .7, border: 'dashed 2px #003049', mb: 3, fontWeight: 'bold', fontFamily: 'Yusei Magic', letterSpacing: '3px', borderRadius: '8px' }}>
                            Free
                        </Typography>
                        <Typography variant='body1' mb={3} sx={{ textAlign: 'center' }}>
                            Inventory management, sales, purchases, revenue, customers, suppliers, debts, profits
                            Daily movements and providing daily reports
                        </Typography>
                        <Typography variant='h5' color='primary.light' mb={4} fontWeight='bold'>
                            0 DA
                        </Typography>
                        <Button variant='outlined' color='primary' sx={{ '&:hover': { bgcolor: 'primary.light' }, fontWeight: 'bold', letterSpacing: '2px' }}>
                            See Details
                        </Button>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                    <Paper elevation={4} sx={{ bgcolor: 'primary.grey', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: '8px' }}>
                        <Typography variant='h5' color='primary' sx={{ p: .7, border: 'dashed 2px #003049', mb: 3, fontWeight: 'bold', fontFamily: 'Yusei Magic', letterSpacing: '2px', borderRadius: '8px' }}>
                            1 YEAR
                        </Typography>
                        <Typography variant='body1' mb={3} sx={{ textAlign: 'center' }}>
                            In addition you can communicate with customers , make your  Bonus system and use the  business intelligence
                        </Typography>
                        <Typography variant='h5' color='primary.light' mb={4} fontWeight='bold'>
                            1000 DA
                        </Typography>
                        <Button
                            variant='outlined'
                            color='primary'
                            sx={{ '&:hover': { bgcolor: 'primary.light' }, fontWeight: 'bold', letterSpacing: '2px' }}
                            onClick={()=>setOpen(true)}
                        >
                            See Details
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            <img src={wave} alt='wave_Footer' style={{ position: 'absolute', left: 0, bottom: '0', zIndex: -1 }} />

        </Box>
    )
}

export default Prices