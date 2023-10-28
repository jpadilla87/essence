import React from 'react'
import { CANDLES } from '../../candles'
import { Candle } from './candle'

export const Shop = () => {
  return (
    <div className="shop">
        <div>
            <h1>Essence</h1>
        </div>
        <div className="candles"> 
          {""}
          {CANDLES.map((candle) => (
            <Candle data={candle} />
          ))}
        </div>
    </div>
  );
};
