import React from "react";

export const HeaderIcon = ({ Icon , active }) => {
  return (
    <div className="flex items-center cursor-pointer text-white md:px-10 md:text-white md:hover:bg-zinc-700 md:active:border-b-2 active:border-blue-500 md:hover:rounded-2xl  hover:text-blue-500 md:p-2 ">
      <Icon className={`h-5 hover:animate-bounce md:hover:animate-none ${active && 'text-blue-500'}`} />
    </div>
  );
};
