import React from 'react'
import "./Container.css"
/* import { Button } from "./Button";
import { Display } from './Display';
import { Input } from './Input'; */

export const Container = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}
