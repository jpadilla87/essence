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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = CANDLES.find((candle) => candle.candleID === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (candleID) => {
        setCartItems((prev) => ({...prev, [candleID]: prev[candleID] + 1}));
    }

    const removeFromCart = (candleID) => {
        setCartItems((prev) => ({...prev, [candleID]: prev[candleID] - 1}));
    }

    const updateCartItemCount = (newAmount, candleID) => {
        setCartItems((prev) => ({...prev, [candleID]: newAmount}));
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount
    }
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};
