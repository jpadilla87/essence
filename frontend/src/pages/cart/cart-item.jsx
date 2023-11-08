import React, { useContext } from "react";
import candleImage from "../../assets/OB000.png";
import { ShopContext } from "../../context/shop-context";
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());


export const CartItem = ({ id }) => {
  const { data, error, isLoading } = useSWR (
    `http://localhost:8080/candles?id=${id}`,
    fetcher
  )

  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  if (error) return "An error has occurred!"
  if (isLoading) return "Loading..."
  const { Candle_ID, Candle_Name, Price, Scent_Category } = data.item[0];

  const handleUpdateCart = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue !== "") {
      updateCartItemCount(parseInt(inputValue), Candle_ID);
    }
  };

  return (
    <div className="cartItem">
      <img src={candleImage} alt="Candle Shot" />
      <div className="description">
        <p>
          <b>{Candle_Name}</b>
        </p>
        <p>${Price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(Candle_ID)}> - </button>
          <input value={cartItems[Candle_ID]} onChange={handleUpdateCart} />
          <button onClick={() => addToCart(Candle_ID)}> + </button>
        </div>
      </div>
    </div>
  );
};
