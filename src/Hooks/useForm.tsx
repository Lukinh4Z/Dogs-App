import React from 'react';
import { IValidation } from '../@types/data';

const types: IValidation = {
    email: {
        regex: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/,
        message: 'Please enter a valid email',
    },
    password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: 'The password need to be at least 8 characters long with, at least 1 lower case, 1 uppercase and 1 number.',
    },
};

export const useForm = (type?: string) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function setChange({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) {
        validate(target.value);
        setValue(target.value);
    }

    function validate(value: string) {
        if (!type) return true
        if (value.length === 0) {
            setError('Please enter a value');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError('');
            return true;
        }
    }


    return {
        value,
        setValue,
        setChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}
