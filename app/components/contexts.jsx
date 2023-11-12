"use client";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({});

  const customerSignIn = (fname, lname, addr, mail, pass, admin) => {
    setCustomerInfo({
      firstName: fname,
      lastName: lname,
      adress: addr,
      email: mail,
      password: pass,
      isAdmin: admin,
    });
  };

  // if JSON.stringify(customerInfo) === "{}" then you know the user hasn't signed in
  const customerSignOut = () => {
    setCustomerInfo({});
  };

  return (
    <UserContext.Provider
      value={{ customerInfo, setCustomerInfo, customerSignIn, customerSignOut }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [priceTotal, setPriceTotal] = useState(0);

  const getCandlePrice = async (candleID) => {
    const response = await fetch(`/api/candles?id=${candleID}`);
    const { data } = await response.json();
    return data.price;
  };

  const addToCart = async (candleID) => {
    const candlePrice = await getCandlePrice(candleID);
    setCartItems({ ...cartItems, [candleID]: (cartItems[candleID] || 0) + 1 });
    setPriceTotal(priceTotal + candlePrice);
  };

  const removeFromCart = async (candleID) => {
    const candlePrice = await getCandlePrice(candleID);
    setCartItems({ ...cartItems, [candleID]: (cartItems[candleID] || 0) - 1 });
    setPriceTotal(priceTotal - candlePrice);
  };

  const updateCartItemCount = async (newAmount, candleID) => {
    const candlePrice = await getCandlePrice(candleID);
    setCartItems((prev) => ({ ...prev, [candleID]: newAmount }));
    setPriceTotal(
      (prev) => prev + (newAmount - cartItems[candleID]) * candlePrice
    );
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    priceTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
