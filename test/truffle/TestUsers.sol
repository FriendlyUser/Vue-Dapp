pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/Users.sol";

contract TestUsers {
    function testDeployed() public {
        uint num1 = 1;
        uint num2 = 1;
        Users myUser = Users(DeployedAddresses.Users());
        

        //Assert.equal(num1,num2,"Cool stuff");
        bytes32 test5 = myUser.get(msg.sender);
        //Assert.equal(test5,test5,"Cool Stuff awesome");
    }

    function testUser() public {
        string memory cooluser = "CoolUser";
        Users myUser = Users(DeployedAddresses.Users());
        bytes32 coolUserBytes = stringToBytes32(cooluser);
        myUser.create(coolUserBytes);
        //bool authenticated = myUser.authenticate();
        bytes32 username = myUser.authenticate();
        //Assert.equal(true,authenticated);
        Assert.equal(coolUserBytes,username,"Expected to a match");
        bytes32 nickname = myUser.get(msg.sender);
        Assert.equal(coolUserBytes,nickname,"Expected to a match");
        myUser.destroy();
        //bytes32 testGet = myUser.get(msg.sender);
        //Assert.equal(coolmsg,testGet,"Cool Stuff awesome");
    }
    function stringToBytes32(string memory source) returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }
}

