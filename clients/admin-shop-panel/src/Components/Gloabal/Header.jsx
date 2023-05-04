import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import StoreIcon from '@mui/icons-material/Store';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useNavigate } from 'react-router-dom';
import Drawer from './Draw';

function Header() {
    const navigate = useNavigate()
    const pages = ['Services', 'About', 'Contact Us'];
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(true);
    useEffect(() => {
        setShowRegister(true)
        setShowLogin(true)
        const path = window.location.pathname;
        if (path.includes('Login')) {
            setShowLogin(false)
        }
        else if (path.includes('SignUp')) {
            setShowRegister(false)
        }
    }, [window.location.pathname])
    return (
        <AppBar sx={{ position: 'relative', bgcolor: 'whitesmoke', p: '0 15px' }}>
            <Toolbar disableGutters>
                <StoreIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant='h6' color='primary' component='a' href='/' sx={{ textDecoration: 'none', letterSpacing: '.2rem', fontWeight: 'bolder' }}>
                    STOCKILI
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            color='primary'
                            sx={{ mr: 2 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {
                        showLogin &&
                        <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<LoginIcon />}
                            sx={{ fontWeight: 'bold' }}
                            onClick={() => navigate('/Login')}
                        >
                            Log in
                        </Button>
                    }
                    {
                        showRegister &&
                        <Button
                            variant='contained'
                            startIcon={<PersonAddAltIcon />}
                            sx={{ bgcolor: 'primary.main', fontWeight: 'bold', ml: 1 }}
                            onClick={() => navigate('/SignUp')}
                        >
                            Sign up
                        </Button>
                    }
                </Box>
                <Drawer />
            </Toolbar>

        </AppBar>
    )
}

export default Header