"use client";
import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );


  return (
    <div className="serach-manufacturer  flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className=" relative w-full cursor-default  rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 focus-within:bg-blue-100 sm:text-sm">
          <Combobox.Button className="absolute top-1/2 transform -translate-y-1/2  ">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="manufacturer-logo"
              className="ml-4 cursor-pointer"
            />
          </Combobox.Button>

          <Combobox.Input
            className=" ml-10 search-manufacturer-input w-full md:w-fit border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:bg-blue-100 outline-none"
            placeholder={manufacturers[0]}
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) =>{ setQuery(event.target.value);setManufacturer(event.target.value);}}

          ></Combobox.Input>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity=100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
              <Combobox.Options
              className='absolute mt-1 max-h-60 w-full  overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className=' cursor-default select-none py-2 pl-10 pr-4 bg-white '
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 z-20   hover:bg-blue-500 hover:text-white  ${
                        active ? " bg-blue-500 font-semibold" : "text-neutral-900 bg-white"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-semibold bg-blue-500 text-white " : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white bg-blue-500": ""}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
