import React, { useContext } from "react";
import { CANDLES } from "../../candles";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {CANDLES.map((candle) => {
          if (cartItems[candle.candleID] !== 0) {
            return <CartItem data={candle} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            Subtotal: <b>${totalAmount.toFixed(2)}</b>
          </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      ) : (
        <h2> Your Cart is Empty. </h2>
      )}
    </div>
  );
};
