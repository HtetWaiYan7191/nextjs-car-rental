'use client'
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import MobileNavbar from "./MobileNavbar";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
        console.log(showMenu);
    }
  return (
    <>
      <LuMenu className="ml-auto md:hidden block text-2xl" onClick={handleClick} />
      {
        showMenu ? (
            <MobileNavbar setShowMenu={handleClick} showMenu={showMenu}/>
        ) : (null)
      }
    </>
  );
};

export default Menu;
