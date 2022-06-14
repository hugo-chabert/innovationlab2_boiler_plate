import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import userApi from '../../services/userApi'
import authApi from '../../services/authApi'
import '../../assets/account.css';


const theme = createTheme();

class Account extends React.Component{

    state = {
        account: null,
        error: null,
        username:"",
        email:"",
    };

    componentDidMount = async () => {
        try {
            const data = await userApi.profile(localStorage.getItem('id'));
            this.setState({ account: data, username: data.username, email: data.email });
        } catch (error) {
            this.setState({ error });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        authApi.update(data.get('username'), data.get('email'), localStorage.getItem('id'))
    };


    render(){

        // Print errors if any
        if (this.state.error) {
            return <div>An error occured: {this.state.error.message}</div>;
        }

        return (

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <Box
                        sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Update profile
                        </Typography>
                        <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            value={this.state.username}
                            onChange = { (e) => this.setState({username: e.target.value})}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange = { (e) => this.setState({email: e.target.value})}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

            );
    }
}

export default Account;