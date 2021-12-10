import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

export const ProfileScreen = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin
    const userDetails = useSelector(state => state.userDetails)
    const { loading , error , user } = userDetails
    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { successUpdate , error: errorUpdate , loading: loadingUpdate } = userUpdateProfile
    const dispatch = useDispatch()
    useEffect(() => {
        if(!user){
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id))
        }else{
            setfirstName(user["user"].firstName)
            setlastName(user["user"].lastName)
            setEmail(user["user"].email)
        }
    },[dispatch,userInfo._id,user])
    const submitHandler = (e) => {
        e.preventDefault()
        if(password != confirmPassword){
            alert('Password is not confirmed')
        }
        else{
            dispatch(updateUserProfile({userId: user._id, firstName , lastName , email , password}))
        }
    }
    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {
                    loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    <>
                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                    {successUpdate && <MessageBox variant="success">Profile update successfully</MessageBox>}
                        <div>
                            <label htmlFor='firstName'>First Name</label>
                            <input id='firstName' type="text" placeholder='Enter your first name' value={firstName} onChange={(e) => setfirstName(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name</label>
                            <input id='lastName' type="text" placeholder='Enter your last name' value={lastName} onChange={(e) => setlastName(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor='email'>Email Address</label>
                            <input id='email' type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input id='password' type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input id='confirmPassword' type="password" placeholder='Enter your password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        </div>
                        <div>
                            <label/>
                            <button className='primary' type='submit'>Update</button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
}
