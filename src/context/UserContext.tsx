import { useState, createContext, useContext } from 'react';
import Cookies from 'js-cookie';
interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUser {
    username: string;
    role_id: string;
    isAuth: boolean;
}

type UserContextType = {
    user: IUser;
    setUser: (user: IUser) => void;
};

export const UserContext = createContext({} as UserContextType);

// custom hook
export const UseUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser>({ username: '', isAuth: false, role_id: '' });

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
