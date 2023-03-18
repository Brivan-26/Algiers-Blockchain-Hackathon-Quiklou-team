const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ICOToken", function () {
  async function deployLoadFixture() {
    const [owner, account1, account2, account3] = await ethers.getSigners();
    const ICOToken = await ethers.getContractFactory("ICOToken");
    const icoToken = await ICOToken.deploy(100); // max supply: 100
    return { owner, account1, account2, account3, icoToken };
  }

  describe("Deployment", () => {
    it("Should set variables correctly", async () => {
      const { icoToken, owner } = await loadFixture(deployLoadFixture);
      const cap = await icoToken.cap();
      const name = await icoToken.name();
      const icoOwner = await icoToken.owner();
      const symbol = await icoToken.symbol();
      const totalSupply = await icoToken.totalSupply();
      const ownerBlanace = await icoToken.balanceOf(icoOwner);

      // check
      expect(cap).to.equal(100);
      expect(name).to.equal("CompaignICO");
      expect(icoOwner).to.equal(owner.address);
      expect(symbol).to.equal("CICO");
      expect(totalSupply).to.equal(100);
      expect(ownerBlanace).to.equal(100);
    });
  });

  describe("Tokens transfer", () => {
    it("Should set allowance correctly", async () => {
      let tx;
      const { icoToken, owner, account1 } = await loadFixture(
        deployLoadFixture
      );
      tx = await icoToken.approve(account1.address, 50);
      await tx.wait();

      tx = await icoToken.allowance(owner.address, account1.address);
      expect(tx).to.equal(50);
    });

    it("Should allow transferFrom when having enough allowance", async () => {
      let tx;
      const { icoToken, owner, account1, account2 } = await loadFixture(
        deployLoadFixture
      );
      await setAllownace(icoToken, owner, account1, 50);

      tx = await icoToken
        .connect(account1)
        .transferFrom(owner.address, account2.address, 25);
      await tx.wait();

      // check
      const account2Balance = await icoToken.balanceOf(account2.address);
      const ownerBalance = await icoToken.balanceOf(owner.address);
      const account1Allowance = await icoToken.allowance(
        owner.address,
        account1.address
      );

      expect(account2Balance).to.equal(25);
      expect(ownerBalance).to.equal(75);
      expect(account1Allowance).to.equal(25);
    });
  });
});

async function setAllownace(contract, owner, account, value) {
  const tx = await contract.connect(owner).approve(account.address, value);
  await tx.wait();
}
