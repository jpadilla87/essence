import React, { useContext } from "react";
import Image from "next/image";
import { ShopContext } from "/components/contexts";
import { fetcher } from "helpers/api";
import useSWR from "swr";
import styles from "./styles.module.css";

export default function Candle({ id }) {
  const { data, error, isLoading } = useSWR(`/api/candles?id=${id}`, fetcher);
  const { addToCart, cartItems } = useContext(ShopContext);

  if (error) return "An error has occurred!";
  if (isLoading) return "Loading...";
  console.log(data);
  const { candle_id, candle_name, price, scent_category } = data;

  const cartItemAmount = cartItems[candle_id];
  return (
    <div className={styles.candle}>
      <Image
        src="/images/OB000.png"
        alt="Candle Shot"
        width={400}
        height={400}
      />
      <div className={styles.candleDescription}>
        <p>
          <b>{candle_name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className={styles.cartButton}
        onClick={() => addToCart(candle_id)}
      >
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
}
