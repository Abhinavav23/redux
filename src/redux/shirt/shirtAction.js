export const buyShirt = (price) =>{
    return {
        type: 'buy-a-shirt', 
        payload: price
    }
}

export const returnShirt = (price) =>{
    return {
        type: 'return-a-shirt',
        payload: price
    }
}
