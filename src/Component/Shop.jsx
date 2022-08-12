import React from 'react'
import { useSelector } from 'react-redux'

export const Shop = () => {
    const shopState = useSelector((state) => state);
    console.log('rendering shop');
  return (
    <>
        <h2>Flipkart</h2>
        <div>Shirt -- {shopState.shirt}</div>
        <div>Jeans  - {shopState.jeans}</div>
        <div>Today's Sell: {shopState.totalsell}</div>
    </>
  )
}
