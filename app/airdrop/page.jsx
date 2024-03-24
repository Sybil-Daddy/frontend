"use client";
import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import Link from "next/link";

const Airdrop = () => {
  const [csvData, setCsvData] = useState([]);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);

  const handleCsvUpload = (data) => {
    setCsvData(data);
  };

  const handleCheckbox1Change = (e) => {
    setCheckbox1Checked(e.target.checked);
  };

  const handleCheckbox2Change = (e) => {
    setCheckbox2Checked(e.target.checked);
  };
  const handleCheckbox3Change = (e) => {
    setCheckbox3Checked(e.target.checked);
  };

  return (
    <>
      <div className="Hero relative min-h-screen applyBG pb-[6rem]">
        <div className="HeroText text-white text-center max-w-[60rem] m-auto pt-[8rem]">
          <div className="Header ml-8 w-[1184px] pt-16  h-14 ">
            <div className="Logo w-[175px]  h-14 left-28 top-0 absolute justify-center items-center inline-flex">
              <Link
                href="/"
                className="Logo opacity-80 mt-8 text-2xl ml-5 sm:font-medium text-white  font-normal font-SpaceGrotesk "
              >
                Sybil Daddy
              </Link>
            </div>
          </div>
          <div className="w-[50rem] text-left font-bold text-2xl">
            1.) Upload Addresses and FID for Airdrop
          </div>
          <div className="mt-10 text-left pl-20">
            <CSVReader
              label="upload"
              cssClass="csv-reader-input"
              onFileLoaded={handleCsvUpload}
              parserOptions={{ header: true }}
            />
            {/* {csvData.length > 0 && (
            <div>
              <h2 className="text-xl mt-4 Logo opacity-80 text-black font-normal font-SpaceGrotesk">
                CSV Data
              </h2>
              <table className="mt-2">
                <thead>
                  <tr>
                    {Object.keys(csvData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, index) => (
                        <td key={index}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}
          </div>
          <div className="w-[50rem] text-left font-bold text-2xl mt-20">
            2.) Select Analysis Methods
          </div>

          <div className="flex flex-col gap-6 justify-center items-start mt-10">
            <div className="flex items-center">
              <label className="container pl-20">
                <input
                  checked={checkbox1Checked}
                  onChange={handleCheckbox1Change}
                  type="checkbox"
                  className="mr-2"
                />
                <div className="checkmark"></div>
              </label>
              <label className="pl-10">
                <div className="w-[10rem] text-start font-semibold text-lg">
                  Social Analysis
                </div>
              </label>
            </div>

            <div className="flex items-center">
              <label className="container pl-20">
                <input
                  checked={checkbox2Checked}
                  onChange={handleCheckbox2Change}
                  type="checkbox"
                  className="mr-2"
                />
                <div className="checkmark"></div>
              </label>
              <label className="pl-10">
                <div className="w-[10rem] text-start font-semibold text-lg">
                  Onchain Analysis
                </div>
              </label>
            </div>

            <div className="flex items-center">
              <label className="container pl-20">
                <input
                  checked={checkbox3Checked}
                  onChange={handleCheckbox3Change}
                  type="checkbox"
                  className="mr-2"
                />
                <div className="checkmark"></div>
              </label>
              <label className="pl-10">
                <div className="w-[10rem] text-start font-semibold text-lg">
                  AI Analysis
                </div>
              </label>
            </div>
          </div>
          <button className="Cta mt-20 px-5 py-2 w-[15rem] justify-center bg-blue-700 rounded-lg border-2 border-blue-700 flex items-start gap-2.5">
            <p className="text-xl font-SpaceGrotesk text-white font-semibold">
              Analyze
            </p>
          </button>
          <div className="w-[50rem] text-left font-bold text-2xl mt-20">
            3.) Enter Token Details
          </div>
          <div className="flex flex-col pl-20">
            <div className="mt-10">
              <div className="block mb-2 text-base font-medium text-white text-left">
                Token Address
              </div>
              <input
                type="text"
                className="bg-gray-50 w-[30rem] border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-10">
              <div className="block mb-2 text-base font-medium text-white text-left">
                Airdrop Amount
              </div>
              <input
                type="number"
                className="bg-gray-50 w-[30rem] border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button className="Cta mt-20 px-5 py-2 w-[15rem] justify-center bg-blue-700 rounded-lg border-2 border-blue-700 flex items-start gap-2.5">
            <p className="text-xl font-SpaceGrotesk text-white font-semibold">
              Start Airdrop
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Airdrop;
