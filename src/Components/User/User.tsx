import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { UserContexType } from '../../@types/data';
import { UserContext } from '../../UserContext';

export const User = () => {
    const { data } = React.useContext(UserContext) as UserContexType;

    return (
        <Box className='animeLeft'
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h1" variant="h2">
                {data?.nome.toUpperCase()}
            </Typography>
            <Typography component="h1" variant="h5">
                {data?.email}
            </Typography>
            <Typography component="h1" variant="h5">
                {data?.username}
            </Typography>
        </Box>
    )
}
