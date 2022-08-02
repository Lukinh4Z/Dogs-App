import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { UserContexType } from '../../@types/data';
import { useForm } from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import { FormInput } from '../Forms/FormInput';

export const LoginForm: React.FC = () => {
    // deixei de usar State direto para migrar pro useForm
    // const [username, setUsername] = React.useState('');
    // const [password, setPassword] = React.useState('');

    // uso este espaço " " para indicar que o campo não pode ser vazio;
    const username = useForm(" ");
    const password = useForm(" ");

    const { userLogin, error, loading } = React.useContext(UserContext) as UserContexType;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        //só realiza o fetch se os valores de user e pass forem válidos
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <Box className='animeLeft'
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h1" variant="h4">
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
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Grid item sx={{ width: "100%" }}>
                        <FormInput
                            type="text"
                            id="username"
                            label="Username"
                            // setChange={setUsername} 
                            {...username} />
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                        <FormInput
                            type="password"
                            id="password"
                            label="Password"
                            // setChange={setPassword}
                            {...password} />
                    </Grid>

                    {error && <Grid item sx={{ width: "100%" }}>
                        <Typography sx={{ width: "100%" }} component="h1" variant="h6">
                            Invalid credentials, please try again.
                        </Typography>
                    </Grid>}

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
