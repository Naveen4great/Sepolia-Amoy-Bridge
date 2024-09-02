// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const nftContractJSON = require("../artifacts/contracts/RoboTek.sol/RoboTek.json");

const nftAddress = "0xaA08Db130048C07E35a95f8306F22Aaa0B86f1A8"; // place your erc271a contract address here
const nftABI = nftContractJSON.abi;
const fxERC271ARootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xF4a09D79C7Af02cCFbe28d409Feb14c7A698f5F1"; // place your public address for your wallet here

async function main() {

    const nftContract = await hre.ethers.getContractAt(nftABI, nftAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await nftContract.setApprovalForAll(fxERC271ARootAddress, true);
    await approveTx.wait();

    console.log('Approval Of NFT Has Been Confirmed');
for( i=0;i<5;i++){
    const depositTx = await fxContract.deposit(nftAddress,walletAddress,i,"0x6556");
    await depositTx.wait();
}

    console.log("Nft's Deposited To Amoy Network");
   
  
  }
  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });