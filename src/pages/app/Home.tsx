import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import { UseUser } from '../../context/UserContext';
const Home = () => {
    // check if user is logged in
    const { user, setUser } = UseUser();

    const isLoggedIn = user.isAuth;

    return (
        <Routes>
            <Route path='*' element={isLoggedIn ? <Dashboard /> : <Navigate to={'/auth/login'} />} />
        </Routes>
    );
};

export default Home;
