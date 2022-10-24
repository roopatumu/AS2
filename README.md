# AS2

Firstly, used the npm command to install truffle on the local machine: Installing truffle with npm opened the box to obtain the essentials, including contracts, migrations, and test codes.

Solidity plugin has been installed on Visual Studio. Version applied is 0.5.1 pragma solidity. Made a fresh contract: Helloworld : basic contracts that produces a text.

Made adjustments to the truffle-config file to reflect our most recent solidity release. Compiled  the contract: truffle compile. 

All of the contracts in the contract folder are compiled using this command. Truffle generates corresponding json files for each contract that will be published on the Ethereum blockchain once it has been developed. 

The build/contract folder contains these json files. We need to generate a migration file before we can deploy the contract. The command "truffle develop" returns few addresses, accounts, and keys. 

Run the migrate to deploy command after connecting to the local instance. This generally sums up the execution of the first three videos of the Smart Contract with Truffle tutorial for beginners. 

Since, sleepy nodesmethod is no longer available to use, another alternative was taken into consideration i.e hardhat. The hardhat tutorial was referred and the following actions were performed such as setting up the environment by installing Node.js and upgrading it if it is previously installed. 

Then, a new hardhat project is created and the hardhat toolbox plugin is installed. A smart contract named Token.sol is written and compiled after which it is tested through a new file in the test called Token.js. 

It is then debugged with the hardhat network. Later it is deployed to a live network and to remote network where the Alchemy api key and the Goerli private key are derived and used in the hardhat.config.js file and finally a new Boilerplate project is created. 