import React,{useState,useEffect,useContext} from 'react';
import '../styles/user.css';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext'
import {useNavigate,Link} from 'react-router-dom'


function SignIn({serverUrl}) {
    
    const [myEmail,setMyEmail]=useState('')
    const [password,setPassword]=useState('')
    const {user,setUser,token,setToken}=useContext(UserContext)
    const navigate=useNavigate();

const handleSignIn=(e)=>{
    e.preventDefault();
    axios.post(`${serverUrl}/users/login`,{
        email:myEmail,
        password
    })
    .then(res=>{
        setUser(res.data)
        setToken(res.data.token)
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('userInfo',JSON.stringify(res.data))
    })
    .catch(err=>console.log(err))
    navigate('/')

}

     
  return (
    <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignIn} > 
            <div className="title-container">
                <h1>Sign In</h1>
                <p>Please fill in this form to login.</p>
            </div>  
            <div className='input-wrapper'> 
                <label htmlFor="email">Email</label>
                <input value={myEmail} onChange={(e)=>setMyEmail(e.target.value)} type="email" placeholder="Enter Email" name="email" required />
            {/* </div>
            <div className='input-wrapper'> */}
                <label htmlFor="psw">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Enter Password" name="psw" required />
            </div>
            <div className="button-container">
                <button type="reset" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign In</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn