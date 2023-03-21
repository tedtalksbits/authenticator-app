import React, { useState } from 'react';
import { UserApi } from '../../api/userApi';
import { Anchor, Button, Container, Dialog, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { AccountApi } from '../../api/accountApi';
import { useDisclosure } from '@mantine/hooks';
import Cookies from 'js-cookie';
import { UseUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { useCookieSession } from '../../hooks/useCookieSession';

export const Login = () => {
    const { user, setUser } = UseUser();
    const { cookie, setCookieSession } = useCookieSession('token');
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: '',
    });

    const [opened, { open, close }] = useDisclosure(false);

    const [formError, setFormError] = useState({
        errorMessage: '',
        error: false,
    });

    const handleSetUserLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormError({
            ...formError,
            error: false,
            errorMessage: '',
        });
        close();
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitUserLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        close();
        const resp = await UserApi.loginUser(userLogin);

        console.log(resp);

        if (resp.status !== 200) {
            setFormError({
                ...formError,
                error: true,
                errorMessage: resp.message,
            });
            open();
        }

        if (resp.status === 200) {
            setUser({
                ...user,
                username: resp.data.username,
                isAuth: true,
                role_id: resp.data.role_id,
            });
            setCookieSession('test', 'test');
        }
    };

    const handleSubmitCreateAcc = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('create account');
        const resp = await AccountApi.getAllAccounts('9');
        console.log(resp);
    };

    const handleCreateUserWithRole = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const secure = window.location.protocol === 'https';
        console.log(Cookies.get('token'));
        const resp = await UserApi.createUserWithRole({
            username: 'test2',
            password: 'test',
            role_id: '0',
        });
        console.log(resp);
    };

    return (
        <Container size={420} my={40}>
            <Title align='center'>Exportal - Login</Title>
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
            <Dialog opened={opened} withCloseButton onClose={close} size='lg' radius='md' bg='red.1'>
                <Group>
                    <IconAlertCircle color='red' style={{ marginRight: '.5rem' }} />
                    <Text size='sm' weight={500}>
                        {formError.errorMessage}
                    </Text>
                </Group>
            </Dialog>

            <pre>{JSON.stringify(userLogin, null, 2)}</pre>

            <Button onClick={(e) => handleCreateUserWithRole(e)}>Super user action</Button>

            {user.isAuth && <Link to='/'>Go to app</Link>}
        </Container>
    );
};
