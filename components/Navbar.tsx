import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import Menu from "./Menu";


const Navbar = () => {
  return (
    <nav className="flex items-center border-b shadow-sm fixed w-full top-0 mx-auto  p-5">
      <div className="nav-logo">
        <Image src="/logo.svg" alt="logo" width={100} height={100}></Image>
      </div>
      <CustomButton
        title="Sign In"
        containerStyles="text-neutral-500 font-normal hidden md:block ml-auto"
      ></CustomButton>
      <Menu/>
    </nav>
  );
};

export default Navbar;
