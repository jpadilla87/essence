"use client";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";


export const UserContext = createContext();


export function UserContextProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState(null);
  const router = useRouter();

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
    setCustomerInfo(null);
    router.push("/shop");
  }

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

  const getCandle = async (candleID) => {
    const response = await fetch(`/api/candles?id=${candleID}`);
    const { data } = await response.json();
    return data;
  };

  const addToCart = async (candleID) => {
    const candleData = await getCandle(candleID);
    const prevAmount = candleID in cartItems ? cartItems[candleID].amount : 0;

    if (prevAmount == candleData.quantity_in_stock) return;

    setCartItems({
      ...cartItems,
      [candleID]: {
        amount: prevAmount + 1,
        stock: candleData.quantity_in_stock,
      },
    });
    setPriceTotal(priceTotal + candleData.price);
  };

  const removeFromCart = async (candleID) => {
    const candleData = await getCandle(candleID);
    const prevAmount = candleID in cartItems ? cartItems[candleID].amount : 0;

    if (prevAmount == 0) return;

    setCartItems({
      ...cartItems,
      [candleID]: {
        amount: prevAmount - 1,
        stock: candleData.quantity_in_stock,
      },
    });
    setPriceTotal(priceTotal - candleData.price);
  };

  const updateCartItemCount = async (newAmount, candleID) => {
    const candleData = await getCandle(candleID);

    setCartItems((prev) => ({
      ...prev,
      [candleID]: { amount: newAmount, stock: candleData.quantity_in_stock },
    }));
    setPriceTotal(
      (prev) =>
        prev + (newAmount - cartItems[candleID].amount) * candleData.price
    );
  };

  const checkoutCart = async () => {
    // lowering the quantity
    for (const [id, data] of Object.entries(cartItems)) {
      const candleData = {
        id,
        quantity: Math.min(data.amount, data.stock),
      };
      await fetch(`/api/candles/quantity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(candleData),
      });
    }
    // set cart items to {}
    setCartItems({});
    // set price total to 0
    setPriceTotal(0);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    checkoutCart,
    priceTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
