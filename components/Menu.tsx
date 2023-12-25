'use client'
import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import MobileNavbar from "./MobileNavbar";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
  return (
    <>
      <LuMenu className={`ml-auto md:hidden block z-10 text-2xl transition-all ${showMenu && 'opacity-30'}`} onClick={handleClick} />
      <MobileNavbar handleClick={handleClick} showMenu={showMenu}/>
    </>
  );
};

export default Menu;
