# PolyBridge

## Project Overview

This project guides you through the process of transferring NFTs (ERC271/ERC271A) from the Sepolia network to the Amoy POLYOGn network using the FxPortal Bridge.

### Key Steps:
* NFT Creation and Deployment on Sepolia: Learn how to create NFT images using Midjourney Or FireFly and deploy them on the Sepolia network.
* ERC271A Contract Development: Write a fully functional ERC271A contract and integrate your NFTs into it.
* Contract Deployment: Deploy your ERC271A contract on the Sepolia network.
* Batch Minting: Mint your NFTs in batches using ERC271A and transfer them to your wallet.
* Bridge Approval and Transfer: Approve your contract to interact with the FxBridge and connect to the Amoy network using the Fx Contract.
* NFT Transfer to Amoy Network: Deposit your NFTs to the Amoy network and wait 20 to 30 minutes for them to appear.
* Balance Check on Amoy Network: Retrieve your wallet's balance on the Amoy network using the contract address from Polyscan.

## Getting Started

To begin, you’ll need a Solidity development environment. You can use an offline IDE like [VSCode](https://code.visualstudio.com/). Once your IDE is set up, follow these steps:

1. Generate NFT Images: Use an AI image generator like [Midjourney](https://www.midjourney.com/)or [firefly](https://www.adobe.com) to create your NFT images.
2. Upload Images to IPFS: Store your images on IPFS to get URLs for your ERC271A contract. Use a service like [Pinata](https://www.pinata.cloud/), upload your images in a folder, and get the IPFS URL.
3. Create ERC271A Contract: Utilize the provided contract template to create your ERC271A contract.
4. Obtain SepoliaETH: You’ll need SepoliaETH for deployment. Mine SepoliaETH for free at [SepoliaPoW](https://sepolia-faucet.pk910.de/) and transfer it to your wallet.

### Installation

Before proceeding, ensure you have the following packages installed:

* [Node.js](https://nodejs.org/en/download/current)
* [HardHat](https://hardhat.org/hardhat-runner/docs/getting-started)

After installation, add your private key to the file: .env.example => PRIVATE_KEY='Your Key Here'.

### Execution

1. Install Dependencies: Run the following command to install the necessary packages:
       npm i
    2. Install OpenZeppelin Contracts:
       npm install @openzeppelin/contracts
    3. Deploy ERC271A Contract: Deploy your contract to the Sepolia network using:
       npx hardhat run scripts/deploy.js --network sepolia
       After deployment, update the tokenAddress variable in the mint.js and approveDeposit.js scripts with the new contract address.

4. Mint NFTs: Mint your NFTs to your wallet with:
       npx hardhat run scripts/mint.js --network sepolia
    5. Approve and Deposit NFTs: Approve and deposit your NFTs to the Polygon network using:
       npx hardhat run scripts/approveDeposit.js --network sepolia
    6. Wait for Transfer: Allow 20 to 30 minutes for the tokens to appear in your Polygon account. You can verify the transaction and obtain the contract address on Polyscan.

7. Check Polygon Balance: Update your getBalance script with the Polygon contract address and run:
       npx hardhat run scripts/getBalance.js --network amoy
       This will display your new Polygon balance.

## Troubleshooting

### Common Issues:

* Lack of SepoliaETH: If you don’t have SepoliaETH, visit [SepoliaPoW](https://sepolia-faucet.pk910.de/). If you're still experiencing issues, feel free to contact me.

For any difficulties or errors, I'm available to assist. Reach out to me at amarnath759498@gmail.com.

## Authors

### Contributor:
- Shadow (Amar)
- Contact: [Naveen](mailto:amarnath759498@gmail.com)

## License

This project is licensed under the [NAVEEN] License. For details, see the LICENSE.md file.