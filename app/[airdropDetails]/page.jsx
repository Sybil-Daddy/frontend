"use client";
import React from "react";
import Link from "next/link";

const Airdrop = () => {
  return (
    <>
      <div className="Hero relative min-h-screen applyBG pb-[6rem]">
        <div className="Header ml-8 w-[1184px] pt-16  h-14 ">
          <div className="Logo w-[175px] h-14 left-28 top-0 absolute justify-center items-center inline-flex">
            <Link
              href="/"
              className="Logo opacity-80 mt-8 text-2xl ml-5 sm:font-medium text-white  font-normal font-SpaceGrotesk "
            >
              Sybil Daddy
            </Link>
          </div>
        </div>
        <div className="max-w-[50rem] m-auto">
          <div className=" mt-[7rem] text-2xl flex gap-3 items-center">
            <img className="w-7 h-7" src="/assets/tokenImage.webp" />
            Starknet Airdrop
          </div>
          <div className="flex mt-3 items-center gap-3 pl-1">
            <div>Base</div>
            <img className="w-6 h-6" src="/assets/BaseLogo.svg" />
          </div>
          <div className="mt-10 text-lg">
            Total Airdrop tokens: {30000} Stark
          </div>
          <button className="Cta mt-6 px-5 py-2 w-[15rem] justify-center bg-blue-700 rounded-lg border-2 border-blue-700 flex items-start gap-2.5">
            <p className="text-xl font-SpaceGrotesk text-white font-semibold">
              Check Eligibility
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Airdrop;
