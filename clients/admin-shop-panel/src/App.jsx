import './App.css'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import Home from './Components/Home/Home'
import { theme } from './Components/Gloabal/Theme'
import Login from './Components/Rgister/Login'
import SignUp from './Components/Rgister/SignUp'
 
function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

