import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Candle = (props) => {
    const {candleID, candleName, price, candleImage, category} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[candleID]
  return <div className="candle">
    <img src={candleImage} alt="Candle SHot" />
    <div className="description">
        <p>
            <b>{candleName}</b>
        </p>
        <p>
            ${price}
        </p>
    </div>
    <button className="addToCartBttn" onClick={() => addToCart(candleID)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
    </button>
</div>;
}
