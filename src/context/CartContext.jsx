import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    return (
        <CartContext.Provider value={{ data, setData }}>
            {children}
        </CartContext.Provider>
    )
}