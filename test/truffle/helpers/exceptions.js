/** 
* @file exceptions.js
* @fileoverview used to catch error cases see [eth-stack]{@link https://ethereum.stackexchange.com/questions/48627/how-to-catch-revert-error-in-truffle-test-javascript}
* @module exceptions
* @summary used in error testing
*/

/**
 * errors codes in solidity, only used during truffle test
 * 
 */

module.exports.errTypes = {
    revert            : "revert",
    outOfGas          : "out of gas",
    invalidJump       : "invalid JUMP",
    invalidOpcode     : "invalid opcode",
    stackOverflow     : "stack overflow",
    stackUnderflow    : "stack underflow",
    staticStateChange : "static state change"
}


/**
 * Catching errors in smart contract transactions during truffle testing
 * 
 */

module.exports.tryCatch = async function(promise, errType) {
    try {
        await promise;
        throw null;
    }
    catch (error) {
        assert(error, "Expected an error but did not get one");
        assert(error.message.startsWith(PREFIX + errType), "Expected an error starting with '" + PREFIX + errType + "' but got '" + error.message + "' instead");
    }
};

const PREFIX = "VM Exception while processing transaction: ";