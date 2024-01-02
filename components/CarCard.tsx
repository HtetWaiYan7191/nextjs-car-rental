"use client";

import { useState } from "react";
import { CarCardProps } from "@/types";
import Image from "next/image";
import React from "react";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card-group">
      <div className="car-card my-[4.5rem]">
        <h2 className="car-card-title">
          {make} {model}
        </h2>

        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className=" self-start text-[14px] font-semibold gray-text">
            $
          </span>
          {carRent}
          <span className=" self-end text-[14px] gray-text font-semibold">
            /day
          </span>
        </p>

        <figure className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/hero.png"
            alt="car model"
            fill
            priority
            className="object-contain z-40"
          />
        </figure>

        <div className="relative flex w-full mt-8 group">
          <div className="flex group-hover:invisible w-full justify-between text-gray-100">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px] text-black font-semibold">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/tire.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px] text-black font-semibold">
                {drive.toUpperCase()}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/gas.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px] text-black font-semibold">{city_mpg}</p>
            </div>
          </div>

          <div className=" hidden  group-hover:flex absolute bottom-0 w-full z-10">
            <CustomButton
              title="View More"
              containerStyles="w-full py-[16px] rounded-full bg-blue-500 flex items-center right-arrow "
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
