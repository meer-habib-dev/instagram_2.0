import Image from "next/image";
import React from "react";

import {
  searchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      {/* left */}
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative w-24  hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-even-none">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 p-3 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text "
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center justify-end">
          <HomeIcon className="navBtn" />
          <MenuIcon className=" navBtn md:hidden cursor-pointer" />
          <div className="relative navItem">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs text-white bg-red-500 h-5 w-5 flex justify-center items-center rounded-full animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            className="h-10 rounded-full cursor-pointer"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
