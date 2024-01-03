'use client'
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center border-b shadow-sm fixed h-14 w-full top-0 bg-white  p-5 z-50">
      <Link href="/" className="nav-logo">
        <Image src="/logo.svg" alt="logo" width={100} height={100}></Image>
      </Link>
      <CustomButton
        title="Sign In"
        containerStyles="text-neutral-500 font-normal hidden md:block ml-auto"
      ></CustomButton>
      <Menu/>
    </nav>
  );
};

export default Navbar;
