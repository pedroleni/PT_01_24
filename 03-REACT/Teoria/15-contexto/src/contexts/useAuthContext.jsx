import { useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    //! 1) -------- Creamos el estado del usuario

    // INICIALIZACIÓN EN LAZING ---> el estado se carga con algo que está guardado en el localStorage
    /** como al recargar la página el estado se actualiza, necesito coger los datos del usuario de donde
     * se guarda, que es el localStorage del usuario que está dentro de la aplicación
     */

    const [ user, setUser ] = useState(() => {
        return localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null
    });

    //! 2) -------- Creamos en el contexto la funcion de login
    
    const login = (data) => {
        setUser(data);
        const stringUser = JSON.stringify(data);
        localStorage.setItem('user', stringUser)
    };

    //! 3) -------- Creamos en el contexto la funcion de logout

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null)
    };

    //! 4) -------- Creamos un hook de memorización para que no se renderice todo de nuevo al recargar la página o modificar un hijo

    const value = useMemo(
        () => ({
            user,
            setUser,
            login,
            logout
        }),
        [user]
    )

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

//! 5) -------- Creamos un custom hook para poder usar el contexto que nos hemos creado

export const useAuth = () => useContext(UserContext)