import Cookies from 'js-cookie';
import { useState } from 'react';

// this hook should return a function that can be used to set the cookie value and the cookie value itself

export const useCookieSession = (value: string) => {
    const [cookie, setCookie] = useState(Cookies.get(value));

    const setCookieSession = (key: string, value: string) => {
        Cookies.set(key, value);
        setCookie(value);
    };

    return { cookie, setCookieSession };
};
