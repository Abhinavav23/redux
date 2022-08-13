import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {buyShirt, returnShirt} from '../redux/shirt/shirtAction'

export const ShirtShop = () => {
    const dispatch = useDispatch()
    const shirtStore = useSelector(state => state.shirt)
    console.log('rendering ShirtShop');
    const buy = (price) => {
        //needs a shirt action should be raised
        dispatch(buyShirt(price))
        // dispatch({type: 'buy-a-shirt'})
    }
    const returnshirt = (price) => {
        //needs a shirt action should be raised
        dispatch(returnShirt(price))
        // dispatch({type: 'buy-a-shirt'})
    }
  return (
    <>
    <h2>Shirt Shop</h2>
    <div>Shirt -- {shirtStore.shirt}</div>
    <div>Total Shirt sale value: {shirtStore.totalshirtsell}</div>
    <button onClick={() =>buy(1000)}>Buy Normalshirt</button>
    <button onClick={() =>buy(2000)}>Buy brandedshirt</button>
    <button onClick={() =>returnshirt(1000)}>return Normalshirt</button>
    <button onClick={() =>returnshirt(2000)}>return brandedshirt</button>
    </>
  )
}
