import React from 'react';
import "./Button.css"

export const Button = ({bClass, symbol, onClick }) => {
  return (
    <div className= {bClass} symbol={symbol} onClick={onClick}>
        {symbol}
    </div>
  )
}
