import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import Header from '../Gloabal/Header'
import HeadImage from '../../assets/HeadImage.png'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Services from './Services';
import About from './About';
import Prices from './Prices';
import Footer from '../Gloabal/Footer';
function Home() {
    const AboutRef = useRef(null);
    const goToAbout = () => {
        AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const [open, setOpen] = useState(false);
    const handleCloseForm = () => {
        setOpen(false)
    }
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Header />
            <Box sx={{ display: 'flex', mb: { xs: 3, md: 10 } }}>
                <Box flex={1} sx={{ m: isMatchedTablette ? '50px 30px' : '40px 50px' }}>
                    <Typography variant={isMatchedPhone ? 'h2' : 'h1'} color='primary' gutterBottom sx={{ fontFamily: 'Yusei Magic', ":first-letter": { color: 'primary.light', fontWeight: 'bold' } }}>
                        Stockili
                    </Typography>
                    {
                        (isMatchedTablette && !isMatchedPhone) && <Box flex={1} sx={{ textAlign: 'center', mb: 5 }}>
                            <img src={HeadImage} alt='header' width='50%' />
                        </Box>
                    }
                    <Typography variant={isMatchedPhone ? 'body1' : 'h6'} sx={{ ":first-letter": { color: 'primary.light', fontWeight: 'bold' }, mb: 5, lineHeight: '35px' }}>
                        Welcome to our site! We offer a wide range of products and services at affordable prices. Our user-friendly site is packed with information to help you make informed decisions. Fast shipping and friendly customer service guaranteed. Shop with us today like never before!
                    </Typography>
                    <Box sx={{ display: 'flex' }}>

                        <Button
                            variant='contained'
                            size='large'
                            sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.light' }, color: 'primary.main', fontWeight: 'bold', letterSpacing: '1.5px', mr: 2 }}
                            onClick={goToAbout}
                        >

                            About Us
                        </Button>
                        <Button variant='outlined' color='primary' startIcon={<PlayCircleOutlineIcon />} sx={{ fontWeight: 'bold', letterSpacing: '1.5px' }}>
                            See demo
                        </Button>
                    </Box>

                </Box>
                {
                    isMatchedTablette ? null : <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={HeadImage} alt='header' width='80%' />
                    </Box>
                }
            </Box>
            <Box ref={AboutRef}>
                <About />
            </Box>
            <Box >
                <Services />
            </Box>
            <Prices setOpen={setOpen} />
            <Footer />
            <Dialog open={open} onClose={handleCloseForm}>
                <DialogTitle color='primary' fontWeight='bold'>FILL YOUR FORM</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="your register ID"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="your store's name"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="your email"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="your phone number"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="your address"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForm} >Cancel</Button>
                    <Button onClick={handleCloseForm} variant='contained'>Send your demand</Button>
                </DialogActions>
            </Dialog>

        </Box>
    )
}

export default Home