import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="flex w-full justify-center">
      <div className="container flex items-center justify-between p-4">
        <Link href={"/compaigns"}>
          <Image
            src={IMAGES.LOGO}
            alt="logo"
            height={200}
            width={200}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="hidden w-full max-w-xs sm:flex">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="input"
          />
        </div>
        <div></div>
        <div>
          <Link href={"/compaigns/create"} className="btn">
            Create a Compaign
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
