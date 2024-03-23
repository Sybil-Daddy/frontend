import Arc from "@/components/Arc/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Link from "next/link";

import { Novatrix } from "uvcanvas";

export default function Home() {
  return (
    <>
      <div className="Hero w-screen h-screen relative ">
        <div className="HeroText absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <Header />
          <p className="max-w-[1077px] opacity-80 text-gray-800 text-4xl md:text-5xl lg:text-6xl font-medium font-ClashGrotesk leading-[72px] tracking-wide">
            Web3 is an internet owned by users and builders for creative people
            with millions of ideas.
          </p>
          <div className=" Subscription mt-16 flex justify-center items-center gap-4">
            <div className="Cta px-10 py-5 bg-blue-700 rounded-full border-2 border-blue-700 flex justify-start items-start gap-2.5">
              <Link href="/airdrop">
                <p className="text-xl font-normal font-SpaceGrotesk text-white">
                  Start Now
                </p>
              </Link>
            </div>
          </div>
          
        </div>
        <Novatrix />
      </div>
    </>
  );
}
