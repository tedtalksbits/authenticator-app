import React, { useState } from 'react';
import { UserApi } from '../../api/userApi';
const useTest = () => ({
    test: {
        hello: 'world',
        world: 'hello',
    },
});
export const Login = () => {
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
    });

    const handleSetUserLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitUserLogin = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        const resp = await UserApi.loginUser(userLogin);

        console.log(resp.message);
    };

    return (
        <div>
            <h1>Login</h1>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' onChange={handleSetUserLogin} />
            <label htmlFor='password'>Password</label>
            <input type='password' autoComplete='true' id='password' name='password' onChange={handleSetUserLogin} />
            <input type='button' value='login' onClick={(e) => handleSubmitUserLogin(e)} />

            <pre>{JSON.stringify(userLogin, null, 2)}</pre>
        </div>
    );
};
