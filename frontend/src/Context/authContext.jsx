import { useState,createContext, useEffect } from "react";
import { useContext } from "react";
import { loginUser } from "../Helper/api-communicator";



const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        // check if user is logged in

    },[]);
    const login= async (email,password)=>{
       const data = await loginUser(email,password);
       
       if(data){
              setUser({email: data.email, name: data.name});
              setIsLoggedIn(true);
              console.log(isLoggedIn);
       }
    }
    const logout = async ()=>{
        // logout user
    }
    const signup = async (name,email,password)=>{
        // signup user
    }

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    }   
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => useContext(AuthContext);

