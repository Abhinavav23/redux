import {createStore} from 'redux';

// action creator
export const buyShirt = (price) =>{
    return {
        type: 'buy-a-shirt', 
        payload: price
    }
}

export const returnShirt = () =>{
    return {
        type: 'return-a-shirt'
    }
}

const initialShopState = {
    shirt: 90, //90-1 = 89
    jeans: 100,
    totalsell: 0 //0+1000 = 1000
}

export const shirtReducer = (state=initialShopState, action) =>{
    if(action.type === 'buy-a-shirt'){
        return {...state, 
            shirt: state.shirt-1, 
            totalsell: state.totalsell+action.payload
        }
    } else if(action.type === 'return-a-shirt'){
        return {...state, shirt: state.shirt+1}
    } 
    return state
}

export const store = createStore(shirtReducer)

// action = {
//     type: 'buy-a-shirt',
//     payload: 1000
// }








// const fiveMultiplier = (number) => {
//     return number*5
// }

// fiveMultiplier(5); //25
// fiveMultiplier(10); //50
// fiveMultiplier(50); //250