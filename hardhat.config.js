require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('./tasks/blockNumber')
require('hardhat-gas-reporter')
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */
const RinkebyUrl = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: RinkebyUrl,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url: 'http://127.0.0.1:854',
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: process.env.EHTERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    outputFile: 'gas-report.txt',
    noColors: true,
    coinmarketcap: process.env.API_KEY,
    token:"MATIC"
  },
}
