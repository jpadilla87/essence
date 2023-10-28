import React from "react";
import { CANDLES } from "../../candles";
import { Candle } from "./candle";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="candles">
        {""}
        {CANDLES.map((candle) => (
          <Candle data={candle} />
        ))}
      </div>
    </div>
  );
};
