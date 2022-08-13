import React from 'react'
import { useSelector } from 'react-redux'

export const ShopDetails = () => {
    const shop = useSelector(state => state);
    console.log(shop);
  return (
    <>
    <h1>ShopDetails</h1>
    <div>Total Cloting Items: {shop.shirt.shirt + shop.jean.Jean}</div>
    <div>Total sell value: {shop.shirt.totalshirtsell+shop.jean.totalJeansell}</div>
    </>
  )
}
