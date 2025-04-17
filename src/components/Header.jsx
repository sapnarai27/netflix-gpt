import React from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.warn(error);
        //navigate("/error");
      });
  };
  return (
    <div className="relative w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="p-2">
        <img
            onClick={()=>{
                navigate("/")
            }}
          className="w-36 cursor-pointer"
          alt="logo"
          src={LOGO}
        />
      </div>
      {user && (<div className="flex gap-2 p-4">
        <div>
        <img
          className="hidden md:block w-12 h-12"
          alt="usericon"
          src={user?.photoURL}
        />
        </div>
        <div className="flex flex-col">
        <span className="font-bold text-white">{user.displayName}</span>
        <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">
          (Sign Out)
        </button>
        </div>
        
      </div>)}
    </div>
  );
};

export default Header;
