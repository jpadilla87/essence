import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { candleID, candleName, price, candleImage, category } = props.data;
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);

  const handleUpdateCart = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue !== "") {
      updateCartItemCount(parseInt(inputValue), candleID);
    }
  };

  return (
    <div className="cartItem">
      <img src={candleImage} alt="Candle Shot" />
      <div className="description">
        <p>
          <b>{candleName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(candleID)}> - </button>
          <input value={cartItems[candleID]} onChange={handleUpdateCart} />
          <button onClick={() => addToCart(candleID)}> + </button>
        </div>
      </div>
    </div>
  );
};
