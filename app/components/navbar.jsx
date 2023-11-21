"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ShoppingCart, Flame, User } from "./icons";
import { UserContext } from "./contexts";
import "./navbar.css";

export default function Navbar() {
  const { UserInfo, UserSignOut } = useContext(UserContext);

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
        <Link href="/cart" className="link">
            Cart
          </Link>
      </div>
      <div className="right">
        <div className="link">
          { UserInfo == null ?
          <Link href="/login" className="loginLink">
            <span className="loginText">Login</span>
            <User size={32} color="white" />
          </Link>
          : <button onClick={() => UserSignOut()} className="loginLink">
              <span className="logoutText">Logout</span>
              <User size={32} color="slategray" />
            </button>
          }
        </div>
      </div>
    </div>
  );
}
