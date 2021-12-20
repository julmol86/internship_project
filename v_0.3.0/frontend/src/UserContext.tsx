import { createContext, useState } from 'react';

export const UserContext = createContext({
  userData: { loggedIn: false },
  setUserData: (any) => {},
});

export const UserContextProvider = (props) => {

  const setUserData = (userData) => {
    setState({...state, userData: userData})
  }
  
  const initState = {
    userData: { loggedIn: false },
    setUserData: setUserData
  } 
  
  // setting context up on start / refresh
  const [state, setState] = useState(initState)
  
  return (
    <UserContext.Provider value={state}>
      {props.children}
    </UserContext.Provider>
  )
}
