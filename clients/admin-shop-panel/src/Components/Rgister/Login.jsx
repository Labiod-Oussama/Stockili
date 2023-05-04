import { Box, Button, Container, InputAdornment, Paper, styled,TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from '../Gloabal/Header'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [visibilityPassword, setVisibilityPassword] = useState(true)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyPassword, setEmptyPassword] = useState(false)
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (!Email) {
            setEmptyEmail(true)
        }
        if (!Password) {
            setEmptyPassword(true)
        }
        if (Email && Password) {
            console.log('yep');
        }

    }
    useEffect(() => {
        if (Email) {
            setEmptyEmail(false)
        }
        if (Password) {
            setEmptyPassword(false)
        }
    }, [Email, Password])
    const theme = useTheme();
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'));
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box>
            <Header />
            <Container sx={{ height: '87vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper elevation={10} sx={{ width: { xs: '90%', md: '60%', lg: '40%' }, p: 2, textAlign: 'center' }}>
                    <Typography variant={isMatchedPhone ? 'h5' : 'h4'} gutterBottom fontFamily='Yusei Magic'>
                        Login to your Account
                    </Typography>
                    <Typography variant='subtitle2' mb={5} >
                        Get started with our app, just create an <br />
                        account and enjoy the experience.
                    </Typography>
                    <form onSubmit={handleSubmitLogin} style={{ display: 'grid', rowGap: '10px', marginBottom: '10px' }}>
                        <TextField
                            name='Email'
                            label='Email'
                            type="text"
                            variant="outlined"
                            value={Email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            error={emptyEmail}
                        />
                        <TextField
                            name='Password'
                            label='Password'
                            type={visibilityPassword ? 'password' : 'text'}
                            variant="outlined"
                            value={Password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            error={emptyPassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        {
                                            visibilityPassword ? <VisibilityOffOutlinedIcon onClick={() => setVisibilityPassword(false)} sx={{ color: 'black', cursor: 'pointer' }} />
                                                : <VisibilityOutlinedIcon onClick={() => setVisibilityPassword(true)} sx={{ color: 'black', cursor: 'pointer' }} />
                                        }
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button type='submit' variant='contained' color='primary' sx={{ fontWeight: 'bold', letterSpacing: '3px' }}>
                            Login
                        </Button>
                    </form>
                    <Box display='flex' alignItems='center' mb={3}>
                        <hr style={{ height: 0, borderColor: 'rgb(81, 80, 80)', flex: 1 }} />
                        <Typography variant={isMatchedPhone ? 'body1' : 'h6'} color='primary' m='0 5px' display='inline-block' textAlign='center'>OR</Typography>
                        <hr style={{ flex: 1, height: 0, borderColor: 'rgb(81, 80, 80)' }} />
                    </Box>
                    <Box sx={{ display: 'grid' }}>
                        <Button
                            variant='outlined'
                            color='primary'
                            startIcon={<FacebookIcon />}
                            sx={{ fontWeight: 'bolder', mb: 1, letterSpacing: '2px' }}
                        >
                            Log in with Fcebook
                        </Button>
                        <Button
                            variant='outlined'
                            startIcon={<GoogleIcon />}
                            sx={{ color: 'primary.A400', fontWeight: 'bolder', letterSpacing: '2px' }}
                        >
                            Log in with Google
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default Login