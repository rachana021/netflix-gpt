import React, { useState } from 'react'
import Header from './Header'
import Browse from './Browse'

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const toggleSignInForm=()=>{
        setSignIn(!isSignIn);
    }
  return (
    <div><Header/>
    <div className='absolute'><img src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img></div>

<form className='w-4/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
   <h1 className='font-bold text-3xl py-4 text-left'>{ isSignIn ? "Sign In" : "Sign Up"}</h1>
   { !isSignIn && <input type='text'  placeholder='Full Name' className='p-4 my-2 w-full bg-gray-500 bg-opacity-40'></input>}
    <input type='text' className='p-4 my-2 w-full bg-gray-500 bg-opacity-40' placeholder='Email address'/>
    <input type='password' className='p-4 my-2 w-full bg-gray-500 bg-opacity-40' placeholder='Password'/>
    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn? "Sign In":"Sign Up"}</button>
<p className='py-4' onClick={toggleSignInForm}>{isSignIn ?" New to Netflix? Sign Up" : " Already Registered? Sign In Now"}</p>
</form>
</div>
    
  )
}

export default Login