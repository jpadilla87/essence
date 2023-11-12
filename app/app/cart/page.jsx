"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { ShopContext } from "components/contexts";
import Item from "./item";
import styles from "./styles.module.css";

const Cart = () => {
  const { cartItems, priceTotal } = useContext(ShopContext);
  const router = useRouter();

  return (
    <div className={styles.cart}>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div>
        {Object.keys(cartItems).map((candleID) => {
          if (cartItems[candleID] !== 0) {
            return <Item id={candleID} />;
          }
        })}
      </div>

      {priceTotal > 0 ? (
        <div>
          <p>
            Subtotal: <b>${priceTotal.toFixed(2)}</b>
          </p>
          <button
            className={styles.checkoutButton}
            onClick={() => router.push("/shop")}
          >
            {" "}
            Continue Shopping{" "}
          </button>
          <button
            className={styles.checkoutButton}
            onClick={() => router.push("/checkout")}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div>
          <h2> Your Cart is Empty. </h2>
          <button
            className={styles.checkoutButton}
            onClick={() => router.push("/shop")}
          >
            {" "}
            Continue Shopping{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
