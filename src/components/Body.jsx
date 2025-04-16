import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // onAuthStateChanged api will automatically called whenever the user sign in, 
    // sign out or sign up or whenevr authentication states changed. It's kind of event listener so we should unsubscribe when component unmout
    // I don't need to write this logic again and again in other components it will be updated from here only
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        } else {
          dispatch(removeUser());
           navigate("/");
        }
      });
      // unsubscribe when component unmounts
      return ()=> unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
