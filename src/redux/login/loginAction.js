import axios from "axios";

export const loginStart = () => {
    return {
        type: 'login-started'
    }
}

export const loginSuccessfull = (data) => {
    return {
        type: 'login-success',
        payload: data
    }
}

// this is a syncrounous action
export const loginFailure = (message) => {
    return {
        type: 'login-failure',
        payload: message
    }
}

// this is asyncrounous action
export const userLogin = (userInfo) => {
    return (dispatch) => {
        // fetch('https://jsonplaceholder.typicode.com/users', {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userInfo)
        // })
        dispatch(loginStart())
        axios.post('https://jsonplaceholder.typicode.com/users', userInfo)
        .then((data) => {
            console.log(data);
            dispatch(loginSuccessfull(data.data))
        })
        .catch((e) => {
            dispatch(loginFailure(e.message))
        })
    }
}