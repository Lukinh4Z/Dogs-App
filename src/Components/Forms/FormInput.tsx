import { TextField } from '@mui/material'
import React from 'react'


export const FormInput = ({ type, id, label, setChange }) => {
    return (
        <TextField
            sx={{ width: "100%" }}
            type={type}
            name={id}
            label={label}
            value={id}
            onChange={({ target }) => { setChange(target.value) }} />
    )
}
