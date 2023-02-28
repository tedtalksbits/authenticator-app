import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
const Home = () => {
    // check if user is logged in
    const isLoggedIn = false;

    return (
        <Routes>
            <Route path='*' element={isLoggedIn ? <Dashboard /> : <Navigate to={'/auth/login'} />} />
        </Routes>
    );
};

export default Home;
