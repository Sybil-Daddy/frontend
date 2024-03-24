export const abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "airdropToken_",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "eligibleAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "addressAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "eligibleFIDs",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "fidAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "claimAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fid",
        type: "uint256",
      },
    ],
    name: "claimAirdropForFID",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addressToLink",
        type: "address",
      },
    ],
    name: "linkAddressToFid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
