import { useState } from 'react'
import './App.css'
import Dashboard from './Component/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { theme } from '../../admin-shop-panel/src/Components/Gloabal/Theme'
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      
    </>
  )
}

export default App
