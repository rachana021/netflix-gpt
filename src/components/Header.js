import React from 'react'
import {LOGO} from '../utils/Constants';
import { signOut } from "firebase/auth";
// from firebsse docs
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { toggleGptSearchView } from '../utils/GptSlice';
import {SUPPORTED_LANGUAGES} from '../utils/Constants'
import { changeLanguage } from '../utils/ConfigSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // finding user from the store, subscribe to the store!!!
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened
      navigate("/error");
    });
  }

  // we need to set up this once, hence we use useEffect! with empty paranthesis
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser
          (
            {
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/");
      }
    });

    //unsubscribe the event, when component unmounts.
    return ()=> unsubscribe();
  }, [])


  const handleGptSearch=()=>{
    // toggle GPT search, using redux
    dispatch(toggleGptSearchView());
  }

const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44'
        src={LOGO}></img>

      {user && <div className='flex p-2'>
        <select className='px-10 m-2 bg-gray-900 text-white' onClick={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=><option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        <button className='py-2 px-4 m-2 bg-green-500  text-white font-bold rounded-lg' onClick={handleGptSearch}>GPT search</button>
        <img src={user.photoURL}></img>
        <button className='font-bold text-white rounded-md ' onClick={handleSignOut}>Sign Out</button>
      </div>}

    </div>
  )
}

export default Header