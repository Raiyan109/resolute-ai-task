import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])


    const logout = async () => {
        await signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            }
        });

        return unsubscribe
    }, [])

    const value = {
        logout, user
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;