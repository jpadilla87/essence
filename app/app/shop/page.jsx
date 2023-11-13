"use client";
import React from "react";
import useSWR from "swr";
import Candle from "./candle";
import { fetcher } from "/helpers/api";
import styles from "./styles.module.css";

export default function Page() {
  const { data, error, isLoading } = useSWR("/api/candles", fetcher);
  if (error) return "An error has occurred!";
  if (isLoading) return "Loading...";

  return (
    <div>
      <div className={styles.shopTitle}>
        <h1>Shop</h1>
      </div>
      <div className={styles.candles}>
        {""}
        {data.map((candle) => (
          <Candle id={candle.candle_id} />
        ))}
      </div>
    </div>
  );
}
