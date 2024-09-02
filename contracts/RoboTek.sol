// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract RoboTek is ERC721A{

    address public owner;

    // maximum robotek nft can mint is 5
    uint256 public maxQuantity = 5;

    // robotek url
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmejfV4PQPBDhr4YuMCGarQGAMmPq4swFmZgm5Xn8hNAKM/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    //  prompt description for robotek
    string public prompt =
        "futuristic working robot";

    constructor() ERC721A("RoboTek", "rT") {
        owner = msg.sender;
    }

    // onlyowner modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    // Mint robot NFT function
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You cannot mint more than 5 NFT");
        _mint(msg.sender, quantity);
    }
    

    // Override function for url of robotek
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    //  prompt functoin for robotek
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}