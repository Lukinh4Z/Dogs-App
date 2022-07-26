import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import { LoginLost } from './LoginLost';
import { LoginReset } from './LoginReset';
import { UserContext } from '../../UserContext';
import { UserContexType } from '~/@types/data';
import styles from "./Login.module.css"

export const Login = () => {
    const { login } = React.useContext(UserContext) as UserContexType;

    if (login === true) return <Navigate to="/account" />;
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="create" element={<LoginCreate />} />
                    <Route path="lost" element={<LoginLost />} />
                    <Route path="reset" element={<LoginReset />} />
                </Routes>
            </div>
        </section>
    )
}
