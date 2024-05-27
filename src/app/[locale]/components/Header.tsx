import Navbar from "@/components/Navbar";
import React from "react";


interface Details {
  title: string;
}
const Header = (probs: Details) => {
  return (
    <>
      <header className="sticky justify-between left-0 top-0 z-10 flex h-20 items-center  border-b bg-[#ffffffcc] px-4 backdrop-blur-[5px] backdrop-saturate-[180%] md:px-8">
        <title>Arslan Leather</title>
        <link rel="shortcut icon" href="favicon.png" type="favicon.png" />
        <Navbar title={""} />
        
      </header>
    </>
  );
};

export default Header;
