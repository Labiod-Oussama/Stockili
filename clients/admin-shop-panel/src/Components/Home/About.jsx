import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import about from '../../Assets/about.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function About() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box pt={2}>
            <Typography variant={isMatchedPhone ? 'h4' : 'h3'} color='primary.main' sx={{ textAlign: 'center', fontFamily: 'Yusei Magic', mb: 5 }}>
                About Us
            </Typography>
            <Box display='flex' p={isMatchedPhone ? '0 15px' : '0 50px'} flexDirection={isMatchedPhone ? 'column-reverse' : 'row'} mb={8} mt={3}>
                <Box data-aos="fade-right" flex={1} textAlign='center'>
                    <img src={about} alt="cv" width='80%' />
                </Box>
                <Box data-aos="fade-left" flex={1} p={isMatchedPhone ? '0 5px' : '0 50px'} display='flex' flexDirection='column' justifyContent='center' mb={isMatchedPhone && 5} >
                    <Typography variant='body1' color='secondary.main' sx={{fontWeight:'bold',lineHeight:'27px',":first-letter":{color:'primary.light'}}}>
                        We are a startup organization whose main activity is programming the Web application for running shops, and we are trying to offer brand-new, differentiated features and services. Our goal is to satisfy our customers by continuing to offer better and newer services to help them run their stores in an easy and fast way, saving them time, effort and money                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About