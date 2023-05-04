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
            <Typography variant={isMatchedPhone?'h4':'h3'} color='primary.main' sx={{ textAlign: 'center',fontFamily:'Yusei Magic', mb: 5 }}>
                About Us
            </Typography>
            <Box display='flex' p={isMatchedPhone?'0 15px':'0 50px'} flexDirection={isMatchedPhone ? 'column-reverse' : 'row'} mb={8} mt={3}>
                <Box data-aos="fade-right" flex={1} textAlign='center'>
                    <img src={about} alt="cv" width='80%' />
                </Box>
                <Box data-aos="fade-left" flex={1} p={isMatchedPhone ? '0 5px' : '0 50px'} display='flex' flexDirection='column' justifyContent='center' mb={isMatchedPhone && 5} >
                    <Typography variant={isMatchedPhone ? 'h5' : 'h4'} sx={{ fontWeight: 'bolder', mb: isMatchedPhone ? 2 : 5 }} color='secondary.main' gutterBottom>
                        How about startups ?
                    </Typography>
                    <Typography variant='body1' color='secondary.main'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat doloremque quae dignissimos ab eius laboriosam, odit impedit tenetur expedita labore? Eaque ab accusantium modi.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About