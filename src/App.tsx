import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { User } from './Components/User/User';
import { UserStorage } from './UserContext';

const theme = createTheme();

function App() {

  return (
    <>
      {/* Esse é o provedor de temas do Material UI */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <UserStorage>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              {/* como eu tenho outras rotas dentro das páginas, é necessário 
                colocar esse "/*"*/}
              <Route path='login/*' element={<Login />} />
              <Route path='account/*' element={<User />} />
            </Routes>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
