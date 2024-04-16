import { createContext, useContext, useMemo, useState } from "react";

// creamos el contexto
const AuthContext = createContext();

// funcion que provee el contexto
export const AuthContextProvider = ({ children }) => {

    // crear el estado del usuario
    const [ user, setUser ] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });

    // funcion login
    const login = (data) => {
        localStorage.setItem('user', data);
        const parseUser = JSON.stringify(data);
        setUser(parseUser);
    };

    // funcion logout
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    // value --> memoriza los datos con useMemo
    const value = useMemo(() => ({
        user,
        setUser,
        login,
        logout
    }), [user]);

    // el componente del contexto
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

// custom hook para usar el contexto
export const useAuth = () => useContext(AuthContext);