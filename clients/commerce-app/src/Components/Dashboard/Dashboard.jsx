import React, { useState } from 'react'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import TopBar from '../Gloabl/TopBar'
import SideBar from '../Gloabl/SideBar'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SellIcon from '@mui/icons-material/Sell';
import Stat from './Stats/Stat';
import { blue, green, orange, pink, purple } from '@mui/material/colors';
import BarChart from './Stats/BarChart';
import PieChart from './Stats/PieChart';
function Dashboard() {
    const [selected, setSelected] = useState('Dashboard');
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar selected={selected} setSelected={setSelected} />
            <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                {
                    selected === 'Dashboard' && <>
                        <TopBar title='Dashboard' />
                        <Container sx={{ mt:{xs:3,md:5}  }}>
                            <Box sx={{display:'flex',flexWrap:'wrap',gap:1}}>
                                <Stat
                                    title='Total Sales'
                                    pourcentage='+ 2.5%'
                                    nbr={4805}
                                    color={blue[500]}
                                    icon={<SellIcon />}
                                />
                                <Stat
                                    title='Total Revenue'
                                    pourcentage='+ 5.2%'
                                    nbr={'$84,245'}
                                    color={pink[600]}
                                    icon={<TrendingUpIcon />}
                                />
                                <Stat
                                    title='Profits'
                                    pourcentage='- 1.4%'
                                    nbr={'34.6%'}
                                    color={green[500]}
                                    icon={<MonetizationOnIcon />}
                                />
                                <Stat
                                    title='Total Customers'
                                    pourcentage='+ 9.5%'
                                    nbr={'1.5K'}
                                    color={orange[400]}
                                    icon={<PeopleAltIcon />}
                                />
                            </Box>
                        </Container>
                        <Container sx={{display:'flex',mt:3}}>
                            <Box sx={{flex:'1.3 1',mr:2}}>
                              <BarChart/>
                            </Box>
                            <Box sx={{flex:'0.7 1'}}>
                              <PieChart/>
                            </Box>
                        </Container>
                    </>
                }
            </Box>
        </Box>
    )
}

export default Dashboard