var Users = artifacts.require("./Users.sol");
const utils = require('./helpers/utils')
contract('User', function(accounts) {
    let myUserInstance;
    let owner    = accounts[0];
    let nonOwner = accounts[1];
    let tryCatch = require("./helpers/exceptions.js").tryCatch;
    let errTypes = require("./helpers/exceptions.js").errTypes;
    beforeEach(async () => {
        // [accounts[0], accounts[1]], requiredConfirmations, dailyLimit

        myUserInstance = await Users.new()
        assert.ok(myUserInstance)
    })
    it("get the size of the user contract", function() {
        return Users.deployed().then(function(instance) {
          var bytecode = instance.constructor._json.bytecode;
          var deployed = instance.constructor._json.deployedBytecode;
          var sizeOfB  = bytecode.length / 2;
          var sizeOfD  = deployed.length / 2;
          console.log("    size of bytecode in bytes = ", sizeOfB);
          console.log("    size of deployed in bytes = ", sizeOfD);
          console.log("    initialisation and constructor code in bytes = ", sizeOfB - sizeOfD);
        }); 
    });
    describe("Simple Operations", async() => {
        //console.log('Cool')
        it("Adding a User", async() =>  {
           const userCreated = await myUserInstance.create("Test")
           const userCreatedAddress = utils.getParamFromTxEvent( userCreated, '_address', null, 'UserCreated')
           const userCreatedPseudo = utils.getParamFromTxEvent( userCreated, '_pseudo', null, 'UserCreated')
           //console.log(userCreatedAddress)
           //console.log(userCreatedPseudo)
           const web3Test = web3.toUtf8(userCreatedPseudo)
           assert.strictEqual(web3Test,"Test")
        });
    });
});
