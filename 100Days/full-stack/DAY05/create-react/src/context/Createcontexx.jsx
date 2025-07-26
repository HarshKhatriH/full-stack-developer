import { createContext, useState } from 'react';


export const AppContexts = createContext();
export default function AppContextProviders({children})
{
  
      const [IsAuth,setIsAuth] = useState(false);
      const[token, setToken] = useState(null);
      
    
    return(
        <AppContexts.Provider value={{IsAuth,setIsAuth,token,setToken}} >
         {children}
        </AppContexts.Provider>
      )
    
}