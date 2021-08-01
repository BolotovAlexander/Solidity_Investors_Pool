const Coin = artifacts.require("Coin");

const initialSupply = 10000000;

contract("Coin test", async (accounts) => {

  beforeEach(async () => {
    this.instance = await Coin.deployed();
  });
  

  it(`should put ${initialSupply} Coin tokens in the first account`, async () => {
    const balance = await this.instance.balanceOf(accounts[0]);

    assert.equal(web3.utils.fromWei(balance), initialSupply);
  });
});