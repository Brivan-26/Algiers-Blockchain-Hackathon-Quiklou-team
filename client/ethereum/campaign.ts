import { ethers } from "ethers";
import contractSig from './contracts/Campaign.sol/Campaign.json'
const faucetContract = (provider) => {
  return new ethers.Contract(
    "0xB05e37532F3307BE4d98C8867c8e20510db775e7",
    contractSig.abi,
    provider
  );
};

export default faucetContract;
