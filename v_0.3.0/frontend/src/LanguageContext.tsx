import { createContext, useState } from 'react';

export const LanguageContext = createContext({
  language: 'fi',
  setLanguage: (any) => {},
});

export const LanguageContextProvider = (props) => {

  const setLanguage = (language) => {
    setState({...state, language: language})
  }
  
  const initState = {
    language: 'fi',
    setLanguage: setLanguage
  } 
  
  // setting context up on start / refresh
  const [state, setState] = useState(initState)
  
  return (
    <LanguageContext.Provider value={state}>
      {props.children}
    </LanguageContext.Provider>
  )
}
