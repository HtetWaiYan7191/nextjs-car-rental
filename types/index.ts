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

export interface CustomFilterProps {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}