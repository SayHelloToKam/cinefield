import React, {useState,useEffect} from 'react'
import '../styles/user.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function SignUp() {

const [myEmail,setMyEmail]=useState('')
const [password,setPassword]=useState('')
const [username,setUsername]=useState('')
const [success,setSuccess]=useState(false)

const handleSignup=(e)=>{
    e.preventDefault();
    axios.post(`https://cinetrail-server.herokuapp.com/users/signup`, {
        email:myEmail,
        password,
        username
    })
    .then(res=>{
        setMyEmail('')
        setPassword('')
        setUsername('')
        setSuccess(true)
    })
    .catch(err=>console.log(err))
}

  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSignup} >
            <div className='title-container'>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='email'>Email</label>
                <input value={myEmail} onChange={(e)=>setMyEmail(e.target.value)} type='email' placeholder='Enter Email' name='email' required />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='psw'>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Password' name='psw' required />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='username'>Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Enter Password' name='username' required />
            </div>
            <div className='button-container'>
                <button type='reset' className='cancelbtn'>Cancel</button>
                <button type='submit' className='signupbtn'>Sign Up</button>
            </div>
            {
                success
                ? <p className='success-message'>You signed up successfully!<Link to='/signin'>Signin</Link></p>
                : <p className="signin-message">Already have an account? <Link to="/signin">Signin</Link></p>
            }
        </form>
    </div>
  )
}

export default SignUp