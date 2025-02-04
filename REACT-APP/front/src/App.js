import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUp from './components/Signup'
import About from './components/About/About'
import Posts from './components/Post/Posts'
import Post from './components/Post/Post'
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Contact from './components/Contact/Contact';
import Account from './components/Account/Account';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import BottomNavigation from '@mui/material/BottomNavigation';


function App() {

  function disconnect(){
    localStorage.clear();
    window.location.reload(true);
  }

  return (

    <Container>
    <Router>
      <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{color: 'white', textDecoration: 'none' }}>Sample app</Link>
            </Typography>
            <Button color="inherit">
            <Link to="/sign-up" style={{ color: 'white', textDecoration: 'none' }}>Sign up</Link>
            </Button>
            <Button color="inherit">
            <Link to="/sign-in" style={{ color: 'white',textDecoration: 'none' }}>Login</Link>
            </Button>
            <Button color="inherit">
            <Link to="/about" style={{ color: 'white',textDecoration: 'none' }}>About</Link>
            </Button>
            <Button color="inherit">
            <Link to="/account" style={{ color: 'white',textDecoration: 'none' }}>Account</Link>
            </Button>
            <Button color="inherit" style={{ color: 'red',textDecoration: 'none' }} onClick={disconnect}>
              Disconnect
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
        <div className="">
          <div className="">
            <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </Container>

  )
}

export default App