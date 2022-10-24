require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "tJrEv2a3cyMiMGBwNJ8ZOqK8PxEfGJyd";

const GOERLI_PRIVATE_KEY = "6d08c72bd120d11f6833dc04e600a16766a5e19f36b931dfd6117c88ad243413";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};