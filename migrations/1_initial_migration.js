const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

// ok so let's go through the solidity testing piece and then come back peace