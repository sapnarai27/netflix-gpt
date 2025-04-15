import React, { useRef, useState } from "react";
import { validateData } from "../utils/formValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser} from '../store/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const errorMsg = validateData(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMsg(errorMsg);
    if (errorMsg) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/38311415?s=400&u=5dac629bd6168d0fd2fa43e95d0769957863ded5&v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            // this dispatch is happening in Body.js automatically when onAuthStateChanged api is getting called after successfull sign up 
            // But I need to dispatch again here as we are updating the displayName and photoURL here with updateProfile api call since there will not be onAuthStateChanged api call on updateProfile api
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          }).catch((error) => {
            console.warn(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ": " + errorMessage);
        });
    } else {
      //Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <div>
      <img
        className="absolute opacity-90 h-screen w-screen"
        alt="body"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 mx-auto my-36 right-0 left-0 border border-black w-3/12 bg-black opacity-90 text-white rounded-sm">
        <div className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            ref={name}
            className="border border-gray-200 p-2 my-2 w-full bg-gray-700 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="border border-gray-200 p-2 my-2 w-full bg-gray-700 rounded-sm"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="border border-gray-200 p-2 my-2 w-full bg-gray-700 rounded-sm"
          type="password"
          placeholder="Password"
        />
        {errorMsg && (
          <div className="text-red-600 font-bold py-2">{errorMsg}</div>
        )}
        <button
          onClick={handleSubmit}
          className="bg-red-700 w-full p-2 my-2 rounded-sm cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div
          onClick={() => {
            setIsSignIn(!isSignIn);
          }}
          className="mt-4 cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already signed up? Sign in now."}
        </div>
      </form>
    </div>
  );
};

export default Login;
