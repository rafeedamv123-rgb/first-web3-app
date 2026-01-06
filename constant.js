


import { getAddress } from "https://esm.sh/viem";

export const contractaddress = getAddress(
  "0x53E3DE0C475b5f2e7167D57a197776558773f863"
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
