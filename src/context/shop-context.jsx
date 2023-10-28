import React, { createContext, useState } from 'react'
import { CANDLES } from '../candles'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < CANDLES.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (candleID) => {
        setCartItems((prev) => ({...prev, [candleID]: prev[candleID] + 1}));
    }

    const removeFromCart = (candleID) => {
        setCartItems((prev) => ({...prev, [candleID]: prev[candleID] - 1}));
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart
    }
  console.log(cartItems)  
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};
