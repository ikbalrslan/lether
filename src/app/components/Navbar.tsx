import Image from "next/image";
import React from "react";
import Top from "./../../../public/Top.jpeg";
import SocialCard from "./social/SocialCard";

interface Details {
  title: string;
}
const Navbar = (probs: Details) => {
  return (
    <>
      <div className="flex justify-between">
        <label className="mt-2 btn btn-circle swap swap-rotate bg-white">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <div className="ml-3 mt-1.5">
          <a href="/">
            <img src="logo.png" alt="logo" className="w-12" />
          </a>
        </div>
      </div>
      <div className="px-2 py-2">
        <div className="font-medium text-slate-900">{probs.title}</div>
        <a href="/">
          <img src="brand.png" alt="logo" className="w-24 -ml-0.5" />
        </a>
      </div>

      <div className="flex justify-between">
        <SocialCard
          optionText="Categories"
          icon="iconamoon:category"
          targetLink=""
          routeLink="/"
          color=""
        />
        <SocialCard
          optionText="Bag"
          icon="mdi:shopping-outline"
          targetLink=""
          routeLink=""
          color=""
        />
        {/* <SocialCard
            optionText="Social"
            icon="mdi:instagram"
            targetLink="_blank"
            routeLink="https://www.instagram.com/arslanleatherco/"
            color=""
          /> */}
      </div>
    </>
  );
};

export default Navbar;
