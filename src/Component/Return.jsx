import React from 'react'
import { useDispatch } from 'react-redux';
import {returnShirt} from '../redux/redux'

export const Return = () => {
   const dispatch =  useDispatch();
    console.log('redering return ');
    const returnS = () => {
        // wnat to return a shirt action should be raised
        dispatch(returnShirt())
        // dispatch({
        //     type: 'return-a-shirt'
        // })
    }
  return (
    <button onClick={returnS}>Return </button>
  )
}
