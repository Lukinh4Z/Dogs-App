import axios from 'axios';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { IData, UserContexType } from './@types/data';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api_fetch';


export const UserContext = React.createContext<UserContexType | null>(null);

// aqui é necessário especificar que children pode ser um array "[]" de "ReactElement"
export const UserStorage = ({ children }: { children: ReactElement[] }) => {
    const [data, setData] = React.useState<IData | null>(null);
    const [login, setLogin] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        function autoLogin() {
            const token = window.localStorage.getItem("token");
            if (token) {
                const options = TOKEN_VALIDATE_POST(token);
                setError(null);
                setLoading(true);
                axios.request(options).then((response) => {
                    if (response.data.data.status !== 200) throw new Error("Token inválido");
                    getUser(token);
                }).catch(function (error) {
                    console.error(error);
                    setError(error);
                    userLogout();
                }).finally(() => {
                    setLoading(false);
                });
            }
        }
        autoLogin();
    }, [])

    function getUser(token: string) {
        const options = USER_GET(token);

        axios.request(options).then((response) => {
            setData(response.data);
            setLogin(true);
            navigate("/account");
        }).catch(function (error) {
            console.error(error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    function userLogin(username: string, password: string) {
        setError(null)
        setLoading(true);
        const options = TOKEN_POST({ username, password });

        axios.request(options).then((response) => {
            if (response.status !== 200) throw new Error(`Error: ${response.data.message}`);
            const token = response.data.token;
            window.localStorage.setItem("token", token);
            getUser(token);
        }).catch(function (err) {
            console.error(err);
            setError(err.message);
            setLogin(false);
        }).finally(() => {
            setLoading(false);
        });
    }

    function userLogout() {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <UserContext.Provider
            value={{ userLogin, userLogout, data, login, loading, error }}>
            {children}
        </UserContext.Provider>
    )
}
