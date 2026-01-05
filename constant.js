


import { getAddress } from "https://esm.sh/viem";

export const contractaddress = getAddress(
  "0x71C95911E9a5D330f4D621842EC243EE1343292e"
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
