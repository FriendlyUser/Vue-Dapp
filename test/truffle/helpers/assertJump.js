/**
 * Used to check for valid opcodes in solidity
 * [eth-stack]{@link https://ethereum.stackexchange.com/questions/48627/how-to-catch-revert-error-in-truffle-test-javascript}
 */
const assertJump = async promise => {
    try {
        await promise
        assert.fail('Expected invalid opcode not received')
    } catch (error) {
        const invalidOpcodeReceived = error.message.search('invalid opcode') >= 0
        assert(invalidOpcodeReceived, `Expected "invalid opcode", got ${error} instead`)
    }
}

module.exports = assertJump