import React, { useContext } from "react";
import { CANDLES } from "../../candles";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, priceTotal } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log(priceTotal)
  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {Object.keys(cartItems).map((candleID) => {
          console.log(candleID)
          if (cartItems[candleID] !== 0) {
            return <CartItem id={candleID} />;
          }
        })}
      </div>

      {priceTotal > 0 ? (
        <div className="checkout">
          <p>
            Subtotal: <b>${priceTotal.toFixed(2)}</b>
          </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      ) : (
        <div className="checkout">
          <h2> Your Cart is Empty. </h2>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
