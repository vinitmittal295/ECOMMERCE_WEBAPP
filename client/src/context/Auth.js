import React, { useState, useContext, createContext, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to provide auth state
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(()=>{
        const data=localStorage.getItem("auth")
        if(data){
            const parseData=JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
    },[auth])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
