import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {buyJean, returnJean} from '../redux/Jean/JeanAction'

export const JeanShop = () => {
    const dispatch = useDispatch()
    const JeanStore = useSelector(state => state.jean)
    console.log('rendering JeanShop');
    const buy = (price) => {
        //needs a Jean action should be raised
        dispatch(buyJean(price))
        // dispatch({type: 'buy-a-Jean'})
    }
    const returnJeans = (price) => {
        //needs a Jean action should be raised
        dispatch(returnJean(price))
        // dispatch({type: 'buy-a-Jean'})
    }
  return (
    <>
    <h2>Jean Shop</h2>
    <div>Jean -- {JeanStore.Jean}</div>
    <div>Total Jean sale value: {JeanStore.totalJeansell}</div>
    <button onClick={() =>buy(1000)}>Buy NormalJean</button>
    <button onClick={() =>buy(2000)}>Buy brandedJean</button>
    <button onClick={() =>returnJeans(1000)}>return NormalJean</button>
    <button onClick={() =>returnJeans(2000)}>return brandedJean</button>
    </>
  )
}
