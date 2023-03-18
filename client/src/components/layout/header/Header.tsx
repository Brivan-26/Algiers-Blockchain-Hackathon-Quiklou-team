import { IMAGES } from "@/constants/images";
import useHook from "@/hooks/useHook";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { connectWallet } from "../../../../ethereum/metamask";
const Header: React.FC = () => {
  const { walletAddress, setWalletAddress, contract, setSigner, setContract } =
    useHook();

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
        <div className="flex gap-4">
          {walletAddress.length > 0 ? (
            <>
              <p className="text-white">
                Welcome <b>{walletAddress.slice(0, 12)}...</b>
              </p>
              <div>
                <Link href={"/compaigns/create"} className="btn">
                  Create a Compaign
                </Link>
              </div>
            </>
          ) : (
            <div
              className="btn cursor-pointer"
              onClick={() =>
                connectWallet(setWalletAddress, setSigner, setContract)
              }
            >
              Login using Metamask
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
