const hre = require('hardhat')
const { ethers, run, network } = require('hardhat')

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
  const deployedContract = await SimpleStorageFactory.deploy()
  await deployedContract.deployed()
  console.log(deployedContract.address)

  if (network.config.chainId == 4 && process.env.EHTERSCAN_API_KEY) {
    await deployedContract.deployTransaction.wait(6)
    await verify(deployedContract.address, [])
  }

  const currentValue = await deployedContract.retrieve()
  console.log(currentValue)
  const updateValue = await deployedContract.store(7)
  await updateValue.wait(1)
  const updatedvaluefromcontract = await deployedContract.retrieve()
  console.log(updatedvaluefromcontract)
}

async function verify(contractaddress, args) {
  try {
    await run('verify:verify', {
      address: contractaddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('already verified')
    } else {
      console.log(e)
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
