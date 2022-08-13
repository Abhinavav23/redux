const initialJeanState = {
    Jean: 90, 
    totalJeansell: 0 
}

export const JeanReducer = (state=initialJeanState, action) =>{
    if(action.type === 'buy-a-Jean'){
        return {...state, 
            Jean: state.Jean-1, 
            totalJeansell: state.totalJeansell+action.payload
        }
    } else if(action.type === 'return-a-Jean'){
        return {...state, 
            Jean: state.Jean+1,
            totalJeansell: state.totalJeansell-action.payload
        }
    } 
    return state
}