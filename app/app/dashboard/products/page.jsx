"use client";
import React from "react";
import Image from "next/image";
import Styles from "./styles.module.css"
import ProductCard from "./productCard";
import { fetcher } from 'helpers/api';
import useSWR from 'swr';

export default function Page() {
  const { data, error, isLoading } = useSWR("/api/candles", fetcher);

  if (error) return "An error has occurred!";
  if (isLoading) return "Loading...";

  return (
    <div>
      <h1>Products Page</h1>
      <div className={Styles.candles}>
        {data.map((candle) => (
          <ProductCard id={candle.candle_id} />
        ))}
      </div>
    </div>
    );
  }
