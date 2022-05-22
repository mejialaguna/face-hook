import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { HeaderIcon } from "./HeaderIcon";

export const Header = () => {
  return (
    <div className="bg-zinc-800 p-2 flex justify-between">
      <div className="flex md:justify-between cursor-pointer">
        <Image
          className="cursor-pointer"
          src="https://img.icons8.com/fluency/96/000000/facebook-new.png"
          height={40}
          width={40}
          layout="fixed"
          alt="face-hook logo"
        />
        <div className="flex ml-2 items-center bg-gray-100 rounded-full p-2 h-9 mt-1 bg-zinc-700">
          <SearchIcon className="h-6 items-center text-white" />
          <input
            className="hidden md:inline-flex ml-2 bg-transparent items-center outline-none placeholder-zinc-400"
            type="text"
            placeholder="Search FaceHook..."
          />
        </div>
      </div>

      <div className="mb-3 mt-3 md:mt-0">
        <div className="flex space-x-6 md:-space-x-8 lg:space-x-0">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="hidden md:inline-flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap text-2xl font-semibold  pr-3 text-zinc-300">
          Jose Mejia
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};
