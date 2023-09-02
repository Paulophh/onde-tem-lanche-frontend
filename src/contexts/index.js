import { AuthContextProvider } from "./AuthContext"

const ContextsProvider = ({ children }) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}

export default ContextsProvider;