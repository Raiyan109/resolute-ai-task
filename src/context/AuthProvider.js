import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import { error } from "daisyui/src/colors";

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
            })
            .catch((error) => {
                console.log(error.message);
            })
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