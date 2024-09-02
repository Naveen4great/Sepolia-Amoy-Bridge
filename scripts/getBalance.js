// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const nftContractJSON = require("../artifacts/contracts/RoboTek.sol/RoboTek.json");

const nftAddress = "0x0a3c595F315221EC3F1281626216138984f737e4"; // place your erc20 contract address here
const nftABI = nftContractJSON.abi;
const walletAddress = "0xF4a09D79C7Af02cCFbe28d409Feb14c7A698f5F1"; // place your public address for your wallet here

async function main() {

    const nft = await hre.ethers.getContractAt(nftABI, nftAddress);

    console.log("You now have: " + await nft.balanceOf(walletAddress) + " RoboTek Nfts In Amoy Network");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });