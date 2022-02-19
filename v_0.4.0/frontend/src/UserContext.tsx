import { createContext, useState } from 'react';

export const userContextEmpty = { loggedIn: false, login: undefined, role: undefined, organizationId: undefined }

export const UserContext = createContext({
  userData: JSON.parse(localStorage.getItem("userData")) ?? userContextEmpty,
  setUserData: (any) => {},
});

export const UserContextProvider = (props) => {

  const setUserData = (userData) => {
    setState({...state, userData: userData})
    localStorage.setItem("userData", JSON.stringify(userData))
  }

  const initState = {
    userData: JSON.parse(localStorage.getItem("userData")) ?? userContextEmpty,
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
