"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ShoppingCart, Flame, User } from "./icons";
import { UserContext } from "./contexts";
import "./navbar.css";

export default function Navbar() {
  const { customerInfo, customerSignOut } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link href="/">
          <Flame size={32} weight="fill" color="white" />
        </Link>
      </div>
      <div className="center">
        <Link href="/" className="link">
          About
        </Link>
        <Link href="/shop" className="link">
          Shop
        </Link>
      </div>
      <div className="right">
        <div className="link">
          <Link href="/cart" className="cartLink">
            <span className="cartText">Cart</span>
            <ShoppingCart size={32} color="white" />
          </Link>
        </div>

        <div className="link">
          { customerInfo == null ?
          <Link href="/login" className="loginLink">
            <span className="loginText">Login</span>
            <User size={32} color="white" />
          </Link>
          : <button onClick={() => customerSignOut()} className="loginLink">
              <span className="loginText">Logout</span>
              <User size={32} color="white" />
            </button>
          }
        </div>
      </div>
    </div>
  );
}
