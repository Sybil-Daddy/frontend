"use client";
import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import Link from "next/link";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { abi as HubABI } from "../../abi/AirdropHub";
import { erc20ABI, useContractRead, useContractWrite } from "wagmi";
import { BigNumber } from "ethers";
import axios from "axios";

const Airdrop = () => {
  const hubContractAddress = "0xEa874C114D6C0C047655b0F1A2cdE04856E3CDB4";
  const [csvData, setCsvData] = useState([]);
  const [airdropTokenAddress, setAirdropTokenAddress] = useState("");
  const [amountToAirdrop, setAmountToAirdrop] = useState(0);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [result, setResult] = useState([]);

  const handleAnalyzeClick = async () => {
    console.log(
      "here: ",
      (() => {
        return csvData.map((e) => ({
          fid: e.addressOrFid,
          airdropInitialScore: Number(e.airdropInitialScore),
        }));
      })()
    );
    try {
      const requestBody = {
        data: {
          data: (() => {
            return csvData.map((e) => ({
              fid: e.addressOrFid,
              airdropInitialScore: Number(e.airdropInitialScore),
            }));
          })(),
        },
        social: {
          button: checkbox1Checked,
        },
        ai: {
          button: checkbox3Checked,
        },
      };
      console.log(requestBody, "requestBody");

      const response = await axios.post(
        "http://localhost:8000/getanalysis",
        requestBody
      );

      console.log("Analysis data:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching analysis data:", error.message);
    }
  };

  console.log(result, "result");

  console.log("set csv data:", csvData);
  const { write: writeCreateNewAirdrop } = useContractWrite({
    address: hubContractAddress, //HubContract address
    abi: HubABI,
    functionName: "createNewAirdrop",
    args: [
      airdropTokenAddress,
      ["0xD02345816076267d3Abd3CcaB1168Df41C985853"],
      [100n],
      [],
      [],
    ],
  });

  const { data: tokenDecimals } = useContractRead({
    address: airdropTokenAddress, //HubContract address
    abi: erc20ABI,
    functionName: "decimals",
  });

  const { write: approveTokenForAirdrop } = useContractWrite({
    address: airdropTokenAddress, //HubContract address
    abi: erc20ABI,
    functionName: "approve",
    args: [
      hubContractAddress,
      BigNumber.from(amountToAirdrop ? amountToAirdrop.toString() : 0)
        .mul(tokenDecimals ? BigNumber.from(10).pow(tokenDecimals) : 0)
        .toBigInt(),
    ],
  });

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
        <div className="px-20 py-12 justify-between items-center flex">
          <Link
            href="/"
            className="text-2xl sm:font-medium text-white  font-normal font-SpaceGrotesk "
          >
            Sybil Daddy
          </Link>
          <DynamicWidget />
        </div>
        <div className="text-white text-center max-w-[60rem] m-auto pt-[7rem]">
          <div className="w-[50rem] text-left font-bold text-2xl">
            1.) Upload Addresses or FIDs for Airdrop
          </div>
          <div className="mt-10 text-left pl-20">
            <CSVReader
              label="upload"
              cssClass="csv-reader-input"
              onFileLoaded={handleCsvUpload}
              parserOptions={{ header: true }}
            />
            {csvData.length > 0 && (
              <div>
                <h2 className="text-xl mt-4 Logo opacity-80 text-white font-bold font-SpaceGrotesk">
                  CSV Data
                </h2>

                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right ">
                    <thead class="text-sm text-black font-semibold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-solid border-black"
                        >
                          AmountOrFid
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-solid border-black"
                        >
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {csvData.slice(0, 3).map((e) => {
                        // eslint-disable-next-line no-undef
                        return (
                          <tr
                            class="text-black font-semibold text-sm"
                          >
                            <th
                              scope="row"
                              class="px-6 py-4 font-semibold whitespace-nowrap border border-solid border-black"
                            >
                              {e.addressOrFid}
                            </th>
                            <td class="px-6 py-4 border border-solid border-black">
                              {e.airdropInitialScore}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {result?.data?.length > 0 && (
              <div>
                <h2 className="text-xl mt-4 Logo opacity-80 text-white font-bold font-SpaceGrotesk">
                  CSV Data
                </h2>

                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right ">
                    <thead class="text-sm text-black font-semibold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-solid border-black"
                        >
                          AmountOrFid
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-solid border-black"
                        >
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {result?.data?.slice(0, 3).map((e) => {
                        return (
                          <tr
                            key={e.fid}
                            class="text-black font-semibold text-sm"
                          >
                            <th
                              scope="row"
                              class="px-6 py-4 font-semibold whitespace-nowrap border border-solid border-black"
                            >
                              {e.fid}
                            </th>
                            <td class="px-6 py-4 border border-solid border-black">
                              {e.airdropInitialScore}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
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
                  disabled
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
          <button
            onClick={handleAnalyzeClick}
            className="Cta mt-20 px-5 py-2 w-[15rem] justify-center bg-blue-700 rounded-lg border-2 border-blue-700 flex items-start gap-2.5"
          >
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
                placeholder="0x"
                value={airdropTokenAddress}
                onChange={(e) => {
                  setAirdropTokenAddress(e.target.value);
                }}
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
                value={amountToAirdrop}
                onChange={(e) => {
                  setAmountToAirdrop(Number(e.target.value));
                }}
                className="bg-gray-50 w-[30rem] border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            onClick={() => {
              approveTokenForAirdrop();
              setTimeout(() => {
                writeCreateNewAirdrop();
              }, [1000]);
            }}
            className="Cta mt-20 px-5 py-2 w-[15rem] justify-center bg-blue-700 rounded-lg border-2 border-blue-700 flex items-start gap-2.5"
          >
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
