'use client'
import React from "react";
import { Poppins } from "next/font/google";
import { CustomButton } from ".";
const poppins = Poppins({ 
    subsets: ['latin'],
    weight: [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900"
    ]

})

const Hero = () => {
  const handleClick = () => {
    console.log('handle click ...')
  }
  return (
    <section className="hero-section pt-36">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <h1 className={ ` ${poppins.className} px-3 font-bold text-4xl md:text-5xl min-w-[520px] tracking-wider leading-[3rem] md:leading-[4rem]`}>Find, book,or rent a car  <br /> - quickly and easily ! </h1>
          <p className={` ${poppins.className} px-3 text-[1.1rem] md:text-[1.5rem] min-w-[552px] max-w-[550px] text-neutral-700 mt-4 md:mt-6 leading-[2rem] md:leading-[3rem]`}>
            Streamline your car rental experience with our effortless booking process.
          </p>
          <div className="pl-3">
          <CustomButton title="Explore Cars" containerStyles="bg-blue-700 hover:bg-blue-600 text-sm md:text-md text-white rounded-full mt-2  px-3 py-2" handleClick={handleClick}/>

          </div>
        </div>
        <div>this is car image </div>
      </div>
    </section>
  );
};

export default Hero;
