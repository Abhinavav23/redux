import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/login/loginAction'

export const Login = () => {
    const dispatch = useDispatch();
    const useDetails = useSelector(state => state.userInfo)
    const[userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (e) =>{
        console.log('calling handle');
        e.preventDefault()
        // dispatch an action which will make an api call
        dispatch(userLogin(userInfo))
    }
  return (
    <>
        {useDetails.userDetails.username && <div>Welcome {useDetails.userDetails.username}</div>}
        <h2>login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">UserName</label>
            <input type="text" 
            id='username' 
            onChange={(e) => setUserInfo(
                {...userInfo, 
                username: e.target.value
                })}/>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'
            onChange={(e) => setUserInfo(
                {...userInfo, 
                password: e.target.value
                })}/>
            <button>login</button>
        </form>
    </>
  )
}
