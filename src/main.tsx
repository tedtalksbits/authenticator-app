import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <MantineProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </MantineProvider>
);
