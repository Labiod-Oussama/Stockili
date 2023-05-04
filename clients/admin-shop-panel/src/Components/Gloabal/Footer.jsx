import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; 
import blob from '../../assets/blob.svg';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import styled from '@emotion/styled';

 function Footer() {
    const theme = useTheme();
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'));
     return (
        <Box sx={{ pr: { xs: 3, md: 5 }, pl: { xs: 3, md: 5 }, pt: 5, pb: 2, bgcolor: 'primary.main' }}>
            <Box sx={{ display: 'flex', pb: 3, borderBottom: 'solid 1.2px whitesmoke' }}>
                {
                    !isMatchedTablette && <img src={blob} style={{ width: '150px' }} />
                }
                <Grid container spacing={2} sx={{ flex: 1, alignItems: 'center' }}>
                    <Grid xs={12} md={4} lg={4}>
                        <Box display='flex' justifyContent='center' >
                            <LocalPhoneIcon sx={{ color: 'primary.A100', mr: 1 }} />
                            <Typography variant='body1' color='whitesmoke'>
                                0123456789
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Box display='flex' justifyContent='center'>
                            <PlaceIcon sx={{ color: 'primary.A100', mr: 1 }} />
                            <Typography variant='body1' color='whitesmoke'>
                                Ouregla
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={4} lg={4}>
                        <Box display='flex' justifyContent='center'>
                            <EmailIcon sx={{ color: 'primary.A100', mr: 1 }} />
                            <Typography variant='body1' color='whitesmoke'>
                                stockili@gmail.com

                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Typography sx={{ mt: 2, color: 'whitesmoke', textAlign: 'center' }}>
                Copyright @{new Date().getFullYear()} All rights reserved.
            </Typography>
        </Box>

    )
}

export default Footer