import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SideBar from '../Global/SideBar'
import TopBar from '../Global/TopBar'
import Stat from './Stats/Stat'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import BarChar from './Stats/BarChar';
import Contacts from './Clients/Contacts';
import AddClients from './Clients/AddClients';
import Profile from './Profile/Profile';
function Dashboard() {
    const [selected, setSelected] = useState('Dashboard');
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar selected={selected} setSelected={setSelected} />
            <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                {
                    selected === 'Dashboard' &&
                    <>
                        <TopBar title='Dashboard' />
                        <Container sx={{ mt: 3 }}>

                            <Grid container gap={1}>
                                <Stat
                                    title='Pending Clients'
                                    nbr={10}
                                    color='primary.A100'
                                    icon={<HourglassTopIcon />}
                                />
                                <Stat
                                    title='Validate Clients'
                                    nbr={40}
                                    color='primary.main'
                                    icon={<AssignmentTurnedInIcon />}
                                />
                                <Stat
                                    title='Clients Declined'
                                    nbr={4}
                                    color='primary.A400'
                                    icon={<NoAccountsIcon />}
                                />
                            </Grid>
                            <Box sx={{ mt: 5 }}>
                                <Typography variant='h4' color='primary' mb={3} textAlign='center'>
                                    Monthly Applications
                                </Typography>
                                <BarChar />

                            </Box>

                        </Container>
                    </>
                }
                {
                    selected === 'All clients' && <Contacts />
                }
                {
                    selected === 'Add client' && <AddClients />
                }
                {
                    selected==='Profile' && <Profile/>
                }

            </Box>
        </Box>
    )
}

export default Dashboard