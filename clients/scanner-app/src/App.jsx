import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { ThemeProvider } from '@mui/material'
import { theme } from './Components/Global/Theme'
import Supplier from './Components/Home/Supplier'
function App() {

  return ( 
    <ThemeProvider theme={theme}>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Supplier' element={<Supplier/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
