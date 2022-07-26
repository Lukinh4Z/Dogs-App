import React from 'react'
import axios from 'axios';
import { Button, Box, Typography, Grid } from '@mui/material';
import { FormInput } from '../Forms/FormInput';
import { UserContext } from '../../UserContext';
import { UserContexType } from '../../@types/data';
import { USER_POST } from '../../api_fetch';

export const LoginCreate = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const { userLogin, error, loading } = React.useContext(UserContext) as UserContexType;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const options = USER_POST(username, password, email);

        axios.request(options).then(function (response) {
            console.log(response);
            if (response.status = 200) userLogin(username, password);
        }).catch(function (error) {
            console.error(error);
        });
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
                Create User Account
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
                    <Grid item>
                        <FormInput
                            type="text"
                            id={email}
                            label="Email"
                            setChange={setEmail} />
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
                            Sign Up
                        </Button>)}
                    {error && <p>Problem Denied</p>}
                </Box>
            </Box>
        </Box>

    )
}
