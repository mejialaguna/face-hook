import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid";
import { HeaderIcon } from "./HeaderIcon";

export const Header = () => {
  return (
    <div className=" bg-zinc-800 p-2 flex justify-between">
      <div className="flex md:justify-between cursor-pointer">
        <Image
          className="cursor-pointer"
          src="https://img.icons8.com/fluency/96/000000/facebook-new.png"
          height={40}
          width={40}
          layout="fixed"
          alt="face-hook logo"
        />
        <div className="flex ml-2 items-center bg-gray-100 rounded-full p-2 h-9 mt-1 ">
          <SearchIcon className="h-6 items-center" />
          <input
            className="hidden md:inline-flex ml-2 bg-transparent items-center outline-none placeholder-blue-500"
            type="text"
            placeholder="Search FaceHook..."
          />
        </div>
      </div>

      <div className="mb-3" style={{ alignSelf: "flex-start" }}>
        <div className="flex justify-between align-top">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* <div>
        <p className=" whitespace-nowrap text-2xl font-semibold  pr-3 text-white">
          {" "}
          Jose Mejia
        </p>
      </div> */}
    </div>
  );
};
