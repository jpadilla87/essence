import React from 'react'

export const Candle = (props) => {
    const {candleID, candleName, price, candleImage, category} = props.data;
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
</div>;
}
