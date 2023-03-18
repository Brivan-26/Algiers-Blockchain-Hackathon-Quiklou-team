import { ethers } from "ethers";
import contractSig from "./contracts/Campaign.sol/Campaign.json";
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reqIndex",
        type: "uint256",
      },
    ],
    name: "approveRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_story",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxReachTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "createProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getProjects",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "goal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "launchDay",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "story",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "maxReachTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numOfContributers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenValue",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "string",
                name: "status",
                type: "string",
              },
              {
                internalType: "bool",
                name: "completed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "approvalsNum",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "voters",
                type: "address[]",
              },
            ],
            internalType: "struct Campaign.Request[]",
            name: "requests",
            type: "tuple[]",
          },
          {
            internalType: "contract ICOToken",
            name: "icoToken",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "contributors",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "funds",
            type: "uint256",
          },
        ],
        internalType: "struct Campaign.Project[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projID",
        type: "uint256",
      },
    ],
    name: "getRequests",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "approvalsNum",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "voters",
            type: "address[]",
          },
        ],
        internalType: "struct Campaign.Request[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "projects",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "launchDay",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "story",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "maxReachTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numOfContributers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenValue",
        type: "uint256",
      },
      {
        internalType: "contract ICOToken",
        name: "icoToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const campaignContract = (provider) => {
  return new ethers.Contract(
    "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
    abi,
    provider
  );
};

export default campaignContract;
