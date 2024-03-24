import Header from "@/components/Header/page";
import Link from "next/link";

import { Novatrix } from "uvcanvas";

export default function Home() {
  return (
    <>
      <div className="Hero w-screen h-screen relative">
        <div className="HeroText z-[20] absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <Header />
          <p className="max-w-[1077px] opacity-80 font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl [line-height:1.2!important] font-ClashGrotesk tracking-wide">
            Power Hyper Sybil Resistant Airdrops, right to your users social
            feed.
          </p>
          <div className=" Subscription mt-16 flex justify-center items-center gap-4">
            <Link href="/airdrop">
              <div className="Cta px-10 py-5 bg-blue-700 rounded-full border-2 border-blue-700 flex justify-start items-start gap-2.5">
                <p className="text-xl font-SpaceGrotesk text-white font-semibold">
                  Start an airdrop
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Novatrix />
      </div>
    </>
  );
}
