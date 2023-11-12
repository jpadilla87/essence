import React from "react";
import Link from "next/link";
import { ShoppingCart, Flame, User } from "./icons";
import "./navbar.css";

export default function Navbar() {
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
          <Link href="/login" className="loginLink">
            <span className="loginText">Login</span>
            <User size={32} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
