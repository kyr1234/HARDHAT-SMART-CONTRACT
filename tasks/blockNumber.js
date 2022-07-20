const { task } = require('hardhat/config')

task('blockNumber', 'PRINTS THE CURRENT NETWORK BLOCKNUMBER').setAction(
  async (tasksArgs, hre) => {
    const blocknumber = await hre.ethers.provider.getBlockNumber()
    console.log(`Current Block Number: ${blocknumber}`)
  },
)
