import {
  createWalletClient,
  custom,
  createPublicClient,
  defineChain,
} from "https://esm.sh/viem";

import { abi, contractaddress } from "./constant.js";

const favnumber = document.getElementById("numberinput");
const output = document.getElementById("output");
const connectButton = document.getElementById("connect");
const setButton = document.getElementById("set");
const setValueInput = document.getElementById("setvalue");
const getButton = document.getElementById("get");

let walletClient;
let publicClient;

favnumber.addEventListener("input", function () {
  output.textContent = "Your favourite number is: " + favnumber.value;
});

connectButton.onclick = connect;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    walletClient = createWalletClient({
      transport: custom(window.ethereum),
    });

    await walletClient.requestAddresses();
    connectButton.innerHTML = "Connected!";
  } else {
    connectButton.innerHTML = "Please install MetaMask!";
  }
}

setButton.onclick = SetValue;

async function SetValue() {
  let valueToSet = setValueInput.value;

  if (typeof window.ethereum !== "undefined") {
    walletClient = createWalletClient({
      transport: custom(window.ethereum),
    });

    const [connectedaccount] = await walletClient.requestAddresses();
    const currentChain = await getCurrentChain(walletClient);

    publicClient = createPublicClient({
      transport: custom(window.ethereum),
    });

    const { request } = await publicClient.simulateContract({
      address: contractaddress,
      abi: abi,
      functionName: "SetValue",
      account: connectedaccount,
      chain: currentChain,
      args: [BigInt(valueToSet)],
    });

    const hash = await walletClient.writeContract(request);
  } else {
    setButton.innerHTML = "Please install MetaMask!";
    return;
  }
}

async function getCurrentChain(client) {
  const chainId = await client.getChainId();

  const currentChain = defineChain({
    id: chainId,
    name: "Custom Chain",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["http://localhost:8545"],
      },
    },
  });

  return currentChain;
}

getButton.onclick = GetValue;

async function GetValue() {
  if (typeof window.ethereum !== "undefined") {
    publicClient = createPublicClient({
      transport: custom(window.ethereum),
    });

    const value = await publicClient.readContract({
      address: contractaddress,
      abi: abi,
      functionName: "GetValue",
    });

    getButton.innerHTML = "Stored Number is: " + value.toString();
  } else {
    getButton.innerHTML = "Please install MetaMask!";
    return;
  }
}
