import { createContext, useContext, useState } from "react";
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const storedToken = localStorage.getItem('@onde-tem-lanche:token');
    const storedCoordinates = localStorage.getItem('@onde-tem-lanche:coordinates');

    const [token, setToken] = useState(storedToken ?? '');
    const [userCoordinates, setUserCoordinates] = useState(
        storedCoordinates ? JSON.parse(storedCoordinates) : null
    )

    const userType = token ? jwt_decode(token).type : null;

    function logout() {
        localStorage.removeItem('@onde-tem-lanche:token');
        setToken('');
    }

    function storeCustomerCoordinates(newCoordinates) {
        setUserCoordinates(newCoordinates);

        localStorage.setItem('@onde-tem-lanche:coordinates', JSON.stringify(newCoordinates));
    }

    function storeToken(newToken) {
        setToken(newToken);

        localStorage.setItem('@onde-tem-lanche:token', newToken);
    }

    return (
        <AuthContext.Provider value={{
            token,
            userType,
            userCoordinates,
            logout,
            storeToken,
            storeCustomerCoordinates
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);