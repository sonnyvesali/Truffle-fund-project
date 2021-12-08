const FundMe = artifacts.require("FundMe.sol");
const web3 = require("web3");

contract("FundMe", async () => {
  //when money is desposited into the contract
  const fundMe = await FundMe.deployed();
  it("Should Deposit Ether", async () => {
    await fundMe.fund({ value: web3.utils.toWei(1, "ether") });
    console.log(
      "The Updated Balance [deposit]: ",
      web3.getBalance(fundMe.address)
    );
    assert(
      String(web3.getBalance(fundMe.address)) ===
        String(web3.utils.toWei(1, "ether"))
    );
  });
  it("Should Withdraw", async () => {
    fundMe.withdraw({ value: web3.utils.toWei(1, "ether") });
    console.log(
      "The Updated Balance [deposit]: ",
      web3.getBalance(fundMe.address)
    );
    assert(web3.getBalance(fundMe.address) === 0);
  });
});
