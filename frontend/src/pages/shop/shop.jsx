import React from "react";
import { CANDLES } from "../../candles";
import { Candle } from "./candle";
import { API_URL } from "../../utils/constants";
import useSWR from "swr";
import "./shop.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Shop = () => {
  const { data, error, isLoading } = useSWR(`${API_URL}}/candles/all`, fetcher);
  if (error) return "An error has occurred!";
  if (isLoading) return "Loading...";

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="candles">
        {""}
        {data.item.map((candle) => (
          <Candle id={candle.Candle_ID} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
