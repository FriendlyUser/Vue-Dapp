module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }/*,
    gitlab: {
      host: "trufflesuite_ganache-cli",
      port: 8545,
      network_id: "*" // Match any network id
    } */
  }
};
