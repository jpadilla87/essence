import React, { createContext, useState } from 'react'
import { CANDLES } from '../candles'
export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [priceTotal, setPriceTotal] = useState(0);
    const getCandlePrice = async (candleID) => {
        const response = await fetch (`http://localhost:8080/candles/price?id=${candleID}`)
        const data = await response.json();
        return data.item[0].Price;
    };

    const addToCart = async (candleID) => {
        const candlePrice = await getCandlePrice(candleID);
        setCartItems({...cartItems, [candleID]: (cartItems[candleID] || 0) + 1});
        setPriceTotal(priceTotal + candlePrice);
    }

    const removeFromCart = async (candleID) => {
        const candlePrice = await getCandlePrice(candleID);
        setCartItems({...cartItems, [candleID]: (cartItems[candleID] || 0) - 1});
        setPriceTotal(priceTotal - candlePrice);
    }

    const updateCartItemCount = async (newAmount, candleID) => {
        const candlePrice = await getCandlePrice(candleID);
        setCartItems((prev) => ({...prev, [candleID]: newAmount}));
        setPriceTotal((prev) => prev + (newAmount - cartItems[candleID]) * candlePrice);
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        priceTotal
    }
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};
