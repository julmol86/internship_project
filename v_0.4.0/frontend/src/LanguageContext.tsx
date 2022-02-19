import { createContext, useState } from 'react';

export const LanguageContext = createContext({
  language: localStorage.getItem("language") ?? 'fi',
  setLanguage: (any) => {},
});

export const LanguageContextProvider = (props) => {

  const setLanguage = (language) => {
    setState({...state, language: language})
    console.log(localStorage)
    localStorage.setItem("language", language)
    console.log(localStorage)
  }
  console.log(localStorage)
  const initState = {
    language: localStorage.getItem("language") ?? 'fi',
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
