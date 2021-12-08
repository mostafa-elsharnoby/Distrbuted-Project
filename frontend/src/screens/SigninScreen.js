import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function SigninScreen(props) {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const redirect = '/'
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo,loading,error } = userSignin
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signin(email,password))
    }
    useEffect(() => {
        /*if(userInfo){
            props.history.push(redirect)
        }*/
    },[props.history,redirect,userInfo])
    return (
        <div>
            <form className="form" onSubmit={submitHandler} action="/api">
                <div>
                    <h1>Sign In</h1>
                </div>
                {
                    loading && <LoadingBox></LoadingBox>
                }
                {
                    error && <MessageBox variant="danger">{"Invalid email or password"}</MessageBox>
                }
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" required onChange = { e => setEmail(e.target.value) }></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required onChange = { e => setPassword(e.target.value) }></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sing In</button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer ? {' '}
                        <Link to="/register">Create a new account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}