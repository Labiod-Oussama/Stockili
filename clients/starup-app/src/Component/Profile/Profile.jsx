import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import TopBar from '../../Global/TopBar'
const Profile = () => {
    const [Name, setName] = useState('user name');
    const [LastName, setLastName] = useState('last name');
    const [Email, setEmail] = useState('your email');
    const [Location, setLocation] = useState('your loaction');
    return (
        <>
            <TopBar title='Profile' />
            <Container sx={{ mt: { xs: 3, md: 7 } }}>
                <Paper elevation={4} sx={{ p: 3 }}>
                    <Typography variant='h4' color='primary.main' mb={2}>
                        Profile
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <TextField
                            label='Name'
                            variant='outlined'
                            color='primary'
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ flex: '1 1 20rem' }}
                        />
                        <TextField
                            label='LastName'
                            variant='outlined'
                            color='primary'
                            value={LastName}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ flex: '1 1 20rem' }}
                        />
                        <TextField
                            label='Email'
                            variant='outlined'
                            color='primary'
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ flex: '1 1 20rem' }}
                        />
                        <TextField
                            label='Loaction'
                            variant='outlined'
                            value={Location}
                            onChange={(e) => setLocation(e.target.value)}
                            color='primary'
                            sx={{ flex: '1 1 20rem' }}
                        />
                        <Button
                            variant='contained'
                            sx={{ bgcolor: 'primary.A100', '&:hover': { bgcolor: 'primary.A100' }, color: "primary.main", fontWeight: 'bold', letterSpacing: '2.5px', flex: '1 1 20rem' }}>
                            Save Changes
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}

export default Profile