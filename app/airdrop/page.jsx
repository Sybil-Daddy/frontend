"use client";
import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import Header from "@/components/Header/page";

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
      <div className="Hero w-screen h-screen relative">
        <div className="HeroText absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <Header />

          <div className="input-div">
            <CSVReader
              label="upload"
              cssClass="csv-reader-input"
              onFileLoaded={handleCsvUpload}
              parserOptions={{ header: true }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <polyline points="16 16 12 12 8 16"></polyline>
              <line y2="21" x2="12" y1="12" x1="12"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
          </div>

          <div>
            <h2 className="text-xl mt-4 Logo opacity-80 text-black font-normal font-SpaceGrotesk">
              {/* Uplo/ad CSV */}
            </h2>
          </div>

          {csvData.length > 0 && (
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
          )}

          {/* <div className="">
            <label className="container">
              <input
                checked={checkbox1Checked}
                onChange={handleCheckbox1Change}
                type="checkbox"
              />
              <div class="checkmark"></div>
            </label>

            <label className="container">
              <span>Karma API</span>
            </label>
          </div>
          <div className="">
            <label className="container">
              <input
                checked={checkbox2Checked}
                onChange={handleCheckbox2Change}
                type="checkbox"
              />
              <div class="checkmark"></div>
            </label>

            <label className="container">
              <span>On Chain
                
              </span>
            </label>
          </div>
          <div className="">
            <label className="container">
              <input
                checked={checkbox3Checked}
                onChange={handleCheckbox3Change}
                type="checkbox"
              />
              <div class="checkmark"></div>
            </label>

            <label className="container">
              <span>Artifical Intellegence</span>
            </label>
          </div> */}
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <label className="container">
                <input
                  checked={checkbox1Checked}
                  onChange={handleCheckbox1Change}
                  type="checkbox"
                  className="mr-2"
                />
                <div className="checkmark"></div>
              </label>
              <label className="container">
                <span>Karma API</span>
              </label>
            </div>

            <div className="flex items-center">
              <label className="container pl-4">
                <input
                  checked={checkbox2Checked}
                  onChange={handleCheckbox2Change}
                  type="checkbox"
                  className="mr-2"
                />
                <div className="checkmark"></div>
              </label>
              <label className="container">
                <span>On Chain</span>
              </label>
            </div>

            <div className="flex items-center">
              <label className="container pl-4">
                <input
                  checked={checkbox3Checked}
                  onChange={handleCheckbox3Change}
                  type="checkbox"
                  className="mr-2"
                />
                <div className="checkmark"></div>
              </label>
              <label className="container">
                <span className="pl-4">AI </span>
              </label>
            </div>
          </div>
        </div>
        <img src="assests/hero.png" alt="hero" />
      </div>
    </>
  );
};

export default Airdrop;
