import React, { useRef, useState } from 'react'
import Header from './Header'
import Browse from './Browse'
import { checkValidation } from "../utils/Validate";
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
// from firebsse docs
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate= useNavigate();
    const dispatch= useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setSignIn(!isSignIn);
    }

    const handleButtonClick = () => {

        //accessing ref value
        // console.log(email); // object will be logged
        console.log(email.current.value); // email.current is refering to the input box and .value gives the value, this is how value is accessed
        // console.log(password.current.value); //same way with the password

        //validate form data, validate.js
        const message = checkValidation( email.current.value, password.current.value);
        // console.log(message);
        setErrorMessage(message);

        //if there is some message, do not go forward
        if (message) return;

        // else proceed with signin/signup
        if (!isSignIn) {
            //SignUp logic, from firebase/auth
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                //we use email.current.value, password.current.value (useref value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    
                    //updating user
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!, dispatching action like in body.js(onauthchange)
                        const {uid,email,displayName,photoURL}=auth.currentUser;
                        //updated auth User!! not the normal user.
                        dispatch(addUser
                            (
                              {uid:uid,
                                email:email,
                                displayName:displayName,
                                photoURL:photoURL}))
                        
                      }).catch((error) => {
                        // An error occurred
                      });
                    console.log(user);
                     
                    //returns us the user
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                   
                });

        }
        else {
            //SignIn logic, from firebase/auth docs

            signInWithEmailAndPassword(auth, email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user);
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                   
                });

        }

    }


    return (
        <div><Header />
            <div className='absolute'><img src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img></div>

            <form className='w-4/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={(e) => e.preventDefault()}>
                <h1 className='font-bold text-3xl py-4 text-left'>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && (
                    <input
                        type='text'
                        ref={name}
                        placeholder='Full Name'
                        className='p-4 my-2 w-full bg-gray-500 bg-opacity-40'
                    />)}

                <input
                    //we will find the reference to this input box
                    type='text'
                    ref={email}
                    className='p-4 my-2 w-full bg-gray-500 bg-opacity-40'
                    placeholder='Email address' />

                <input
                    type='password'
                    ref={password}
                    className='p-4 my-2 w-full bg-gray-500 bg-opacity-40'
                    placeholder='Password' />

                <p className="text-red-500">{errorMessage}</p>

                <button
                    //when we click this button, we need to know what is inside input box(email, pass etc)
                    onClick={handleButtonClick}
                    className='p-4 my-6 bg-red-700 w-full rounded-lg'>
                    {isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignIn ? " New to Netflix? Sign Up" : " Already Registered? Sign In Now"}</p>
            </form>
        </div>

    )
}

export default Login