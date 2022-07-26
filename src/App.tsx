import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserStorage } from './UserContext';

const theme = createTheme();

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <UserStorage>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login/*' element={<Login />} />
              {/* como eu tenho outras rotas dentro do login, é necessário 
          colocar esse /* */}
            </Routes>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
