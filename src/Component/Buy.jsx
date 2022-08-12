import React from 'react'
import { useDispatch } from 'react-redux';
import {buyShirt} from '../redux/redux';

export const Buy = () => {
    console.log('rendering Buy');
    const dispatch = useDispatch()
    const buy = (price) => {
        //needs a shirt action should be raised
        dispatch(buyShirt(price))
        // dispatch({type: 'buy-a-shirt'})
    }
  return (
    <>
    <button onClick={() =>buy(1000)}>NormalshirtBuy</button>
    <button onClick={() =>buy(2000)}>brandedshirtBuy</button>
    </>
  )
}
