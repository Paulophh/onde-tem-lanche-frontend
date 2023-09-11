import { createContext, useContext, useState } from "react";
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const storedToken = localStorage.getItem('@onde-tem-lanche:token');
    const [token, setToken] = useState(storedToken ?? '');
    const [userCoordinates, setUserCoordinates] = useState({
        lat: -24.0442818,
        lng: -52.3760713
    })

    const userType = token ? jwt_decode(token).type : null;

    function storeToken(newToken) {
        setToken(newToken);

        localStorage.setItem('@onde-tem-lanche:token', newToken);
    }

    return (
        <AuthContext.Provider value={{
            token,
            userType,
            userCoordinates,
            storeToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);