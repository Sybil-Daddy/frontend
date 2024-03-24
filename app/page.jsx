"use client";
import Header from "@/components/Header/page";
import Link from "next/link";
import { Novatrix } from "uvcanvas";

export default function Home() {
  return (
    <>
      <div className="Hero w-screen h-screen relative">
        <div className="HeroText z-[20] absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <Header />
          <p className="max-w-[1077px] opacity-80 font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl [line-height:1.2!important] font-ClashGrotesk tracking-wide">
            Power Hyper Sybil Resistant Airdrops, right to social feeds of your
            users.
          </p>
          <div className="Subscription mt-16 flex justify-center items-center gap-4">
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

      {/* Features Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="opacity-80 font-bold text-gray-800 text-4xl font-semibold text-center mb-12">
            Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="feature-icon mb-4 rounded-full bg-black w-16 h-16">
                <img src="https://raw.githubusercontent.com/AllenAJ/imgs/main/Mask%20group.png"></img>
              </div>
              <h3 className="text-black font-semibold mb-3">
                Airdrop to Web2 Users
              </h3>
              <p className="text-gray-600 text-center mb-4">
                This is the description of the first feature of our app. We are
                going to briefly outline what this feature does.
              </p>
              {/* <button className="mt-auto bg-black text-white px-6 py-2 rounded-full">Button Label</button> */}
            </div>
            {/* Feature 2 */}
            <div className="feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="feature-icon mb-4 rounded-full bg-black w-16 h-16">
                <img src="https://raw.githubusercontent.com/AllenAJ/imgs/main/Mask%20group-1.png"></img>
              </div>
              <h3 className="text-black font-semibold mb-3">
                Use Social Analysis
              </h3>
              <p className="text-gray-600 text-center mb-4">
                This is the description of the second feature of our app. We are
                going to briefly outline what this feature does.
              </p>
              {/* <button className="mt-auto bg-black text-white px-6 py-2 rounded-full">Button Label</button> */}
            </div>
            {/* Feature 3 */}
            <div className="feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="feature-icon mb-4 rounded-full bg-black w-16 h-16">
                <img src="https://raw.githubusercontent.com/AllenAJ/imgs/main/Mask%20group-2.png"></img>
              </div>
              <h3 className="text-black font-semibold mb-3">
                Use On-Chain Analysis
              </h3>
              <p className="text-gray-600 text-center mb-4">
                This is the description of the third feature of our app. We are
                going to briefly outline what this feature does.
              </p>
              {/* <button className="mt-auto bg-black text-white px-6 py-2 rounded-full">Button Label</button> */}
            </div>
            {/* Feature 4 */}
            <div className="feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="feature-icon mb-4 rounded-full bg-black w-16 h-16">
                <img src="https://raw.githubusercontent.com/AllenAJ/imgs/main/Mask%20group-3.png"></img>
              </div>
              <h3 className="text-black font-semibold mb-3">Use AI Analysis</h3>
              <p className="text-gray-600 text-center mb-4">
                This is the description of the forth feature of our app. We are
                going to briefly outline what this feature does.
              </p>
              {/* <button className="mt-auto bg-black text-white px-6 py-2 rounded-full">Button Label</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
