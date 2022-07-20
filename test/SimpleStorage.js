const {ethers}=require("hardhat")
const { assert,expect } = require("chai");

describe("SimpleStorage",  function () {

 let SimpleStorageFactory,DeployedContract;

  beforeEach(async function () {
  
SimpleStorageFactory=await ethers.getContractFactory("SimpleStorage")
DeployedContract=await SimpleStorageFactory.deploy()


})

  it("Should Have a Value of 0", async function () {
  
    const currentRetrieveValue = await DeployedContract.retrieve()
    const expectedValue = "0"
    assert.equal(currentRetrieveValue.toString(),expectedValue)
})
  
  
  it("Should Update the value in contract", async function () {
    
    const expectedValue = "10"
    const updatedvalueresponse=await DeployedContract.store(expectedValue)
    await updatedvalueresponse.wait(1)
    const retrieveValue=await DeployedContract.retrieve()
    assert.equal(retrieveValue.toString(),expectedValue)


  })




   
});
