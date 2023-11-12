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
      <div className="imageContainer">
        <Image
          src="/images/OB000.png"
          alt="Candle Shot"
          width={200}
          height={200}
        />
      </div>
      <div className="description">
        <p className="itemName">
          <b style={{ fontSize: "20px" }}>{candle_name}</b>
        </p>
        <p className="itemPrice" style={{ fontSize: "18px" }}>
          ${price}
        </p>
        <div className="countHandler">
          <button
            className="buttonMinus"
            onClick={() => removeFromCart(candle_id)}
          >
            -
          </button>
          <input
            value={cartItems[candle_id]}
            onChange={handleUpdateCart}
            type="number"
            min="0"
          />
          <button className="buttonPlus" onClick={() => addToCart(candle_id)}>
            +
          </button>
        </div>
      </div>

      <style jsx>{`
        .cartItem {
          display: flex;
          align-items: center;
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
          border-radius: 15px;
          margin: 30px;
          padding: 15px;
          width: 800px; /* Adjust the width as needed */
        }

        .imageContainer {
          margin-right: 25px;
        }

        .description {
          width: 100%;
          font-size: 16px;
        }

        .itemName {
          margin-bottom: 8px;
        }

        .itemPrice {
          margin-bottom: 16px;
        }

        .countHandler {
          display: flex;
          align-items: center;
        }

        .buttonMinus,
        .buttonPlus {
          width: 30px;
          height: 30px;
          background-color: #2196f3; /* Blue color */
          color: white;
          border: none;
          border-radius: 20%;
          margin: 0 5px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .countHandler input {
          width: 40px;
          text-align: center;
          font-weight: bolder;
        }
      `}</style>
    </div>
  );
}
