import React from "react";
import SocialCard from "../social/SocialCard";

const LogoButton = () => {
  return (
    <>
      <div className="flex justify-start px-2 py-2 cursor-pointer hover:bg-neutral-200 rounded-md">
        <div className="">
          <a href="/">
            <img src="/logo.png" alt="logo" className="w-11" />
          </a>
        </div>
        <div className="px-2 py-2">
          <a href="/">
            <img src="/brand.png" alt="logo" className="w-16 -ml-0.5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LogoButton;
