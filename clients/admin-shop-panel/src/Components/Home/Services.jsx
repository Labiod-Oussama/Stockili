import React, { useEffect } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
function Services() {
    const Services = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Cum quis distinctio, sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Cum quis distinctio, sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Cum quis distinctio, sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Cum quis distinctio, sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
    ]
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box sx={{mb:10}}>
            <Typography variant={isMatchedPhone?'h4':'h3'} color='primary.main'sx={{textAlign:'center',mb:5,fontFamily:'Yusei Magic'}}>
                Services
            </Typography>
            <Timeline position="alternate">
                {
                    Services.map((Service, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: 'primary.light',transform:'scale(1.5)' }} />
                                {
                                    (index != Services.length - 1) && <TimelineConnector />
                                }
                            </TimelineSeparator>

                            <TimelineContent sx={{":first-letter":{color:'primary.main',fontWeight:'bolder'},lineHeight:{xs:'25px',md:'30px'}}}>{Service}</TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </Box>
    )
}

export default Services