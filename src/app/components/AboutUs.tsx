import React from "react";
import Header from "./Header";
import Image from "next/image";
import Top from "./../../../public/Top.jpeg";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <Header pageTitle="About Us" />
      <div className="w-full h-full bg-white shadow-md rounded-xl">
        <Image
          className="h-48 w-full object-cover"
          src={Top}
          alt="Your Company"
        />
        <div className="">
          <div className="m-10 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum id
            ex sit laboriosam dolores consectetur quia inventore minima dolorem
            quasi corrupti repellendus vel ducimus, facilis impedit officiis
            reprehenderit exercitationem recusandae? Blanditiis omnis maiores
            corrupti rerum earum quaerat fugiat nam dolorem! Eligendi a quasi
            deserunt qui nulla pariatur, sunt sed minus.
          </div>
          <div className="mx-8">
            <Image
              className="h-96 items-center object-cover rounded-lg"
              src={Top}
              alt="Your Company"
            />
          </div>

          <div className="m-10 text-justify">
            pedita vel sapiente voluptatum mollitia asperiores inventore! Cum ad
            assumenda fugiat dignissimos quod commodi placeat impedit quos
            numquam alias animi minima officiis, harum illum quaerat
            voluptatibus perspiciatis, quo, repellat ullam sequi mollitia!
            Quaerat nobis error veniam?
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
