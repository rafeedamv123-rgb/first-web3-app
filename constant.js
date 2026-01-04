


import { getAddress } from "https://esm.sh/viem";

export const contractaddress = getAddress(
  "0x8464135c8F25Da09e49BC8782676a84730C318bC"
);

export const abi = [
  {
    type: "function",
    name: "GetValue",
    inputs: [],
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "SetValue",
    inputs: [{ type: "uint256", name: "_value" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "value",
    inputs: [],
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
  },
];
