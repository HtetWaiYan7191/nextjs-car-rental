import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface MobileNavbarProps {
    setShowMenu?: MouseEventHandler<HTMLButtonElement>;
    showMenu?: boolean;
}