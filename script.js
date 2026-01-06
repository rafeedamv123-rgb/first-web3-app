import { BrowserProvider, ethers } from "./node_modules/ethers/dist/ethers.min.js";
import { abi, contractaddress } from "./constant.js";



const connectButton = document.getElementById("connect");
const setButton = document.getElementById("set");
const getButton = document.getElementById("get");
const input = document.getElementById("setvalue");
const output = document.getElementById("output");
const numberinput = document.getElementById("numberinput");
numberinput.addEventListener("input", () => {
  const value = numberinput.value;
  output.textContent = "You entered: " + value;
});



connectButton.onclick= connect;
let provider;
let signer;
let contract;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    
    await ethereum.request({ method: "eth_requestAccounts" });
   provider = new ethers.BrowserProvider(window.ethereum);
 signer = await provider.getSigner();
 contract = new ethers.Contract(contractaddress, abi, signer);
    connectButton.innerText = "Connected!";

  }
}
setButton.onclick= setvalue;
async function setvalue() {
  const value = input.value;
alert("Setting value to " + value);
const tx=await contract.SetValue(value);
await tx.wait();
const updatedValue=await contract.GetValue();
alert("Value set to " + updatedValue.toString());}

getButton.onclick= getvalue;
async function getvalue() {
  const values = await contract.GetValue();
  getButton.innerText = values.toString();
}

