import Image from "next/image";
import React from "react";

import {
  searchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaceIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div>
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
          <HomeIcon className="w-10 h-10" />
          <MenuIcon className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
