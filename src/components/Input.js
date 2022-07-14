import React from 'react'
import './input.css'

export const Input = ({value}) => {
  let strValue=value.toString()
  return (
    <div className='input'>{
      !strValue.includes(".")?value:value
    }</div>
  )
}
