import React from 'react'
import { Link } from 'react-router-dom'
import { FormInput } from '../Forms/FormInput';
import { Box, Button, Grid, Typography } from '@mui/material';
import { UserContext } from '../../UserContext';
import { UserContexType } from '~/@types/data';

export const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { userLogin, error, loading } = React.useContext(UserContext) as UserContexType;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        userLogin(username, password);
    }

    return (
        <Box className='animeLeft'
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                    width: "100%",
                    mt: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}>
                <Grid container spacing={2} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}>
                    <Grid item>
                        <FormInput
                            type="text"
                            id={username}
                            label="Username"
                            setChange={setUsername} />
                    </Grid>
                    <Grid item>
                        <FormInput
                            type="password"
                            id={password}
                            label="Password"
                            setChange={setPassword} />
                    </Grid>
                </Grid>
                <Box sx={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    {loading ?
                        (<Button
                            sx={{ width: "10em", margin: "1rem" }}
                            disabled
                            type="submit"
                            variant='contained'>
                            Loading...
                        </Button>) :
                        (<Button
                            sx={{ width: "10em", margin: "1rem" }}
                            type="submit"
                            variant='contained'>
                            Login
                        </Button>)}
                    {error && <p>Access Denied</p>}
                    <Button
                        sx={{ width: "10em", margin: "1rem" }}
                        variant='contained'>
                        <Link to="/login/create" style={{ color: "white" }}>
                            Sign Up
                        </Link>
                    </Button>
                </Box>
            </Box>
            <Button
                variant='contained'>
                <Link to="/login/lost" style={{ color: "white" }}>
                    Recover Access
                </Link>
            </Button>
        </Box>
    )
}
