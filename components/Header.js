import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

export const Header = () => {
  return (
    <div>
      <Image
        className="cursor-pointer"
        src="https://img.icons8.com/fluency/96/000000/facebook-new.png"
        height={40}
        width={40}
        layout="fixed"
        alt="face-hook logo"
      />
          <div>
              {/* <SearchIcon /> */}
        <input className="border-2 border-slate-900" type="text" place="Search FaceHook"/>
      </div>
    </div>
  );
};
