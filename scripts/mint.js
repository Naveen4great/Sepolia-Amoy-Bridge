// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const nftContractJSON = require("../artifacts/contracts/RoboTek.sol/RoboTek.json");
require('dotenv').config()

const nftAddress = "0xaA08Db130048C07E35a95f8306F22Aaa0B86f1A8"; // place your erc20 contract address here
const nftABI = nftContractJSON.abi;
const walletAddress = "0xF4a09D79C7Af02cCFbe28d409Feb14c7A698f5F1"; // place your public address for your wallet here

async function main() {

    const nft = await hre.ethers.getContractAt(nftABI, nftAddress);
  
    const tx = await nft.mint(5);
    await tx.wait();

    console.log("You now have: " + await nft.balanceOf(walletAddress) + " RoboTek Nft's");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });