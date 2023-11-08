import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import candleImage from "../../assets/OB000.png";
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json());

export const Candle = ({ id }) => {
  const { data, error, isLoading } = useSWR (
    `http://localhost:8080/candles?id=${id}`,
    fetcher
  )
  // fetch individual candle based on id from backend
  const { addToCart, cartItems } = useContext(ShopContext);

  if (error) return "An error has occurred!"
  if (isLoading) return "Loading..."
  
  const { Candle_ID, Candle_Name, Price, Scent_Category } = data.item[0];

  const cartItemAmount = cartItems[Candle_ID];
  return (
    <div className="candle">
      <img src={candleImage} alt="Candle Shot" />
      <div className="description">
        <p>
          <b>{Candle_Name}</b>
        </p>
        <p>${Price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(Candle_ID)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};
