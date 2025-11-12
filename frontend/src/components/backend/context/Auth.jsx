import { createContext, useState } from 'react';


export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const initialUserInfo = localStorage.getItem('userInfo');
    const [user, setUser] = useState(initialUserInfo ? JSON.parse(initialUserInfo) : null);

    const login = (userInfo) => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo)); 
        setUser(userInfo);
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
