import { TextField } from '@mui/material';
import React from 'react';
import { IFormInput } from '~/@types/data';


export const FormInput: React.FC<IFormInput> = ({ type, id, label, value, setChange, error, onBlur }) => {
    return (
        <>
            <TextField
                sx={{ width: "100%" }}
                type={type}
                name={id}
                id={id}
                label={label}
                value={value}
                onChange={setChange}
                onBlur={onBlur}
            />

            {error && <p>{error}</p>}

        </>)
}
