const initialShirtState = {
    shirt: 90, 
    totalshirtsell: 0 
}

export const shirtReducer = (state=initialShirtState, action) =>{
    if(action.type === 'buy-a-shirt'){
        return {...state, 
            shirt: state.shirt-1, 
            totalshirtsell: state.totalshirtsell+action.payload
        }
    } else if(action.type === 'return-a-shirt'){
        return {...state, 
            shirt: state.shirt+1,
            totalshirtsell: state.totalshirtsell-action.payload
        }
    } 
    return state
}
