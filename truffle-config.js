
var HDWalletProvider = require('truffle-hdwallet-provider')
require('dotenv').config()
var mnemonic = process.env.HDWALLET_MNEMONIC
console.log(mnemonic)
console.log(process.env.INFURA_API_KEY)
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
     // testnets
    // properties
    // network_id: identifier for network based on ethereum blockchain. Find out more at https://github.com/ethereumbook/ethereumbook/issues/110
    // gas: gas limit
    // gasPrice: gas price in gwei
    ropsten: {
      provider: new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 7000000,
      gasPrice: 28921116127
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 6000000,
      gasPrice: 28921116127
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 4612388,
      gasPrice: 28921116127
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 9545,         // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01      // <-- Use this low gas price
    },
  }
};
