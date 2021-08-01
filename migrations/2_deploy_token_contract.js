const Coin = artifacts.require("Coin");

const initialSupply = 10000000;

module.exports = function (deployer) {
  deployer.deploy(Coin, initialSupply);
};

