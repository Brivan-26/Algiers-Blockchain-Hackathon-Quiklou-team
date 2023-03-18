const hre = require("hardhat");

async function main() {
  const Campaign = await hre.ethers.getContractFactory("Campaign");
  const campaign = await Campaign.deploy();

  await campaign.deployed();

  console.log(`Campaign contract is deployed to ${campaign.address}`);
  const ICOToken = await hre.ethers.getContractFactory("ICOToken");
  const icoToken = await ICOToken.deploy(1000);

  console.log(`ICOToken contract is deployed to ${icoToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
