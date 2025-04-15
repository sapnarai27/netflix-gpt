import React from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("sign out called")
    signOut(auth)
      .then(() => {
        console.log("sign out called then")

      })
      .catch((error) => {
        console.warn(error);
        //navigate("/error");
      });
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <div className=" p-2">
        <img
            onClick={()=>{
                navigate("/")
            }}
          className="w-36 cursor-pointer"
          alt="logo"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
