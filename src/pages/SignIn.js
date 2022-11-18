import React,{useState,useEffect,useContext} from 'react';
import '../styles/user.css';
import axios from 'axios';


function SignIn() {
    


     
  return (
    <div className="signup-container">
        <form className="signup-form" > 
            <div className="title-container">
                <h1>Sign In</h1>
                <p>Please fill in this form to login.</p>
            </div>  
            <div className='input-wrapper'> 
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" name="email" required />
            {/* </div>
            <div className='input-wrapper'> */}
                <label htmlFor="psw">Password</label>
                <input  type="password" placeholder="Enter Password" name="psw" required />
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