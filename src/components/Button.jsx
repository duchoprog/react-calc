import React from 'react';
import "./Button.css"

export const Button = ({bClass, symbol, onClick }) => {
  return (
    <div className= {bClass} >
        <div className='btnTxt' >{symbol}</div>
    </div>
  )
}
