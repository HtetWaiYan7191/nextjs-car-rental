import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface MobileNavbarProps {
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    showMenu?: boolean;
}