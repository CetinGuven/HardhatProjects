require("@nomiclabs/hardhat-waffle");

const INFURA_URL="https://rinkeby.infura.io/v3/1b3e74261f2d4379833e82410e93700";

module.exports = {
    solidity: "0.8.0",
    networks: {
      rikenby: {
        url: INFURA_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    }
};