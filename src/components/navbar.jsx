import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Flame } from 'phosphor-react';
import { User } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
        <Flame size={32} weight="fill" color="white"/>
        </Link>
      </div>
      <div className="center">
        <Link to="/" className="link">
          About
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
      </div>
      <div className="right">
        <div className="link">
          <Link to="/cart" className="cartLink">
            <span className="cartText">Cart</span>
            <ShoppingCart size={32} color="white"/>
            </Link>
        </div>
        
        <div className="link">
          <Link to="/login" className="loginLink">
            <span className="loginText">Login</span>
            <User size={32} color="white"/>
          </Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
