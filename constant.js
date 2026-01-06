


import { getAddress } from "https://esm.sh/viem";

export const contractaddress = getAddress(
  "0xa7f1c80a21b5c68b4471682b7dad4ecddfb6dd70"
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
