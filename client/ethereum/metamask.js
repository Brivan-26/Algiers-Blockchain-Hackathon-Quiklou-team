import { ethers } from "ethers";
import { toast } from "react-toastify";
import faucetContract from "./campaign";
import { success, warn, error } from "@/utils/alerts";
export const connectWallet = async (
  setWalletAddress,
  setSigner,
  setContract
) => {
  if (
    typeof window != "undefined" &&
    typeof WindowGlobal.ethereum != "undefined"
  ) {
    try {
      const provider = new ethers.providers.Web3Provider(WindowGlobal.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setSigner(provider.getSigner());
      setContract(faucetContract(provider));
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.log(err.message);
      warn(err.message);
    }
  } else {
    error("Please install metamask");
  }
};

export const getCurrentWalletConnected = async (
  setWalletAddress,
  setSigner,
  setContract
) => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length > 0) {
        setSigner(provider.getSigner());
        setContract(faucetContract(provider));
        setWalletAddress(accounts[0]);
      } else {
        warn("Connect to metamask using the connect button");
      }
    } catch (err) {
      console.log(err.message);
      error(err.message);
    }
  } else {
    error("Please install metamask");
  }
};

export const addWalletListener = async (setWalletAddress) => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    window.ethereum.on("accountsChanged", (accounts) => {
      setWalletAddress(accounts[0]);
    });
  } else {
    setWalletAddress("");
    warn("Please install metamask");
  }
};
