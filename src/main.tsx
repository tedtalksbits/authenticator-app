import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './context/UserContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <MantineProvider>
            <UserProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </UserProvider>
        </MantineProvider>
    </QueryClientProvider>
);
