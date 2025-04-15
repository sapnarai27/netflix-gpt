import React from "react";
import Login from "./Login";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <img
        className="absolute opacity-90 h-screen w-screen"
        alt="body"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"
      />
      <Header />
      <Login />
    </div>
  );
};

export default Body;
