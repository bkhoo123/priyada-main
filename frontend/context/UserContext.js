"use client"
import React, {useState, useEffect, useContext, createContext} from 'react'


export const UserContext = createContext()
export const UserGlobalState = () => useContext(UserContext)

const UserContextProvider = ({ children }) => {
  const [sessionUser, setSessionUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    if (user) {
      setSessionUser(user); 
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      setSessionUser(null);
    }
    
    setIsLoading(false);  // Set loading to false after checking user
  }, [setSessionUser, setAuthenticated]);

  if (isLoading) {
    // Render a loading indicator or return null to render nothing
    return <div>Loading...</div>; // Or a custom loader/spinner
  }


  return (
    <UserContext.Provider
      value={{ 
        sessionUser,
        setSessionUser,
        authenticated, 
        setAuthenticated
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider