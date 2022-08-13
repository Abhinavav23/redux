export const buyJean = (price) =>{
    return {
        type: 'buy-a-Jean', 
        payload: price
    }
}

export const returnJean = (price) =>{
    return {
        type: 'return-a-Jean',
        payload: price
    }
}
