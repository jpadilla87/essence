import React, { useContext } from "react";
import Image from "next/image";
import { ShopContext } from "components/contexts";
import useSWR from "swr";
import { fetcher } from "/helpers/api";

export default function Item({ id }) {
  const { data, error, isLoading } = useSWR(`api/candles?id=${id}`, fetcher);

  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  if (error) return "An error has occurred!";
  if (isLoading) return "Loading...";
  const { candle_id, candle_name, price, scent_category } = data;

  const handleUpdateCart = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue !== "") {
      updateCartItemCount(parseInt(inputValue), candle_id);
    }
  };

  return (
    <div className="cartItem">
      <Image
        src="/images/OB000.png"
        alt="Candle Shot"
        width={200}
        height={200}
      />
      <div className="description">
        <p>
          <b>{candle_name}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(candle_id)}> - </button>
          <input value={cartItems[candle_id]} onChange={handleUpdateCart} />
          <button onClick={() => addToCart(candle_id)}> + </button>
        </div>
      </div>
    </div>
  );
}
