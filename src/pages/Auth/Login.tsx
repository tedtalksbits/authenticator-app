import React, { useState } from 'react';
import { UserApi } from '../../api/userApi';
import { Anchor, Button, Container, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { AccountApi } from '../../api/accountApi';
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

    const handleSubmitUserLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const resp = await UserApi.loginUser(userLogin);

        console.log(resp);
    };

    const handleSubmitCreateAcc = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('create account');
        const resp = await AccountApi.createAccount({
            userId: 2,
        });
    };

    return (
        <Container size={420} my={40}>
            <Title align='center'>Login</Title>
            <Text color='dimmed' size='sm' align='center' mt={5}>
                Do not have an account yet?{' '}
                <Anchor<'a'> href='#' size='sm' onClick={(event) => event.preventDefault()}>
                    Create account
                </Anchor>
            </Text>
            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                <TextInput label='Username' required onChange={handleSetUserLogin} name='username' />
                <PasswordInput label='Password' required mt='md' onChange={handleSetUserLogin} name='password' />
                <Button onClick={(e) => handleSubmitUserLogin(e)} mt='md' fullWidth>
                    Log in
                </Button>
            </Paper>

            <pre>{JSON.stringify(userLogin, null, 2)}</pre>

            <Button onClick={(e) => handleSubmitCreateAcc(e)}>check cookie</Button>
        </Container>
    );
};
