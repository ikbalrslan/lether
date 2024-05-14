import React from "react";
import SocialCard from "./social/SocialCard";

const Header = () => {
  return (
    <>
      <header className="sticky justify-between left-0 top-0 z-10 flex h-20 items-center  border-b bg-[#ffffffcc] px-4 backdrop-blur-[5px] backdrop-saturate-[180%] md:px-8">
        <title>Arslan Leather</title>
        <link rel="shortcut icon" href="favicon.png" type="favicon.png" />
        <div className="">
          <a href="/" className="">
            <img src="logo.png" alt="logo" className="w-10" />
          </a>
          <a href="/">
            <img src="brand.png" alt="logo" className="w-12 -ml-0.5" />
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
            optionText="Shopping Chart"
            icon="mdi:shopping-outline"
            targetLink="_blank"
            routeLink="https://www.instagram.com/arslanleatherco/"
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
      </header>
    </>
  );
};

export default Header;
