"use client";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [UserInfo, setUserInfo] = useState(null);
  const router = useRouter();

  const UserSignIn = async (loginInfo) => {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const userInfo = await response.json();

    if (userInfo.found) {
      setUserInfo({
        ...userInfo.data,
        isAdmin: userInfo.isAdmin
      });

      if (userInfo.isAdmin) {
        router.push("/dashboard");
      } else {
        router.push("/shop");
      }
    }

    return userInfo.found;
  };

  // if JSON.stringify(UserInfo) === "{}" then you know the user hasn't signed in
  const UserSignOut = () => {
    setUserInfo(null);
    router.push("/shop");
  };

  const UserRegister = async (newUser) => {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const { created } = await response.json();

    if (created) {
      setUserInfo(newUser);
      router.push("/shop");
    }

    return created;
  };

  const contextValue = {
    UserInfo,
    setUserInfo,
    UserSignIn,
    UserSignOut,
    UserRegister,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
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
    console.log("checkoutCart");
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
