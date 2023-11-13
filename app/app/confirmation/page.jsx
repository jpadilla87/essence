"use client";
import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirmation Page</h1>
      <p className={styles.message}>Your order has been confirmed!</p>
      <button className={styles.button} onClick={() => router.push("/shop")}>
        Back to Shop
      </button>
    </div>
  );
};

export default ConfirmationPage;
