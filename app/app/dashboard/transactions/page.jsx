"use client";
import React from "react";
import OrderTable from "./ordertable/ordertable";
import "./order.scss";

const Order = () => {
  return (
    <div className="orders">
      <div className="ordersContainer">
        <OrderTable />
      </div>
    </div>
  );
};

export default Order;
