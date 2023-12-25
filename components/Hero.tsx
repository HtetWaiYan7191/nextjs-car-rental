'use client'
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";



const Hero = () => {
  const handleClick = () => {
    console.log('handle click ...')
  }
  return (
    <section className="hero-section pt-36 px-5 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-y-8 ">
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <h1 className={ ` px-4 font-bold text-[1.7rem] max-w-[400px] md:max-w-[650px] md:text-5xl tracking-wider leading-[3rem] md:leading-[4rem]`}>Find, book,or rent a car  - quickly and easily ! </h1>
          <p className={` px-4 text-[1.1rem] md:text-[1.5rem]  max-w-[550px] text-neutral-700  md:mt-6 leading-[1.5rem] md:leading-[2.4rem]`}>
            Streamline your car rental experience with our effortless booking process.
          </p>
          <div className="px-4">
          <CustomButton title="Explore Cars" containerStyles="bg-blue-700 hover:bg-blue-600 text-sm md:text-md text-white rounded-full mt-2  px-3 py-2" handleClick={handleClick}/>

          </div>
        </div> 
        <div className="hero-img-container relative">
                <figure className="hero-image w-[500px] h-[200px] md:w-[800px] ">
                   <Image src="/hero.png"   alt="hero-image" fill  className="object-contain hero-img" />
                </figure> 
                <div className="image-overlay"></div> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
