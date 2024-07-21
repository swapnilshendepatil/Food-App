import { createContext, useState } from "react";

export const userContext = createContext(null)

export const UserContextProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    return (
        <userContext.Provider value={{ name, setName, lastname, setLastName }}>
            {children}
        </userContext.Provider>
    )
}