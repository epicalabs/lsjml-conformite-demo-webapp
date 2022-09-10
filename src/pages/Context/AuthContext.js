import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  let navigate = useNavigate();
  let location = useLocation(); 

  const [auth, setAuth] = useState(null);
    
    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUserOnApp');

        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            setAuth(user)
        }else{
            setAuth(null)
        }
    }, [location])
    
    const logout = () => {
        window.localStorage.removeItem('loggedUserOnApp');
        navigate('/');
    }
  
    const data = {auth, logout}

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}
export {AuthProvider}
export default AuthContext