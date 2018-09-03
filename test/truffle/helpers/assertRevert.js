// Checks for revert, taken from openzeppelin, 2018/06/05
const revertPromise = async promise => {
    try {
        await promise
        assert.fail('Expected revert not received')
    } catch (error) {
        const revertFound = error.message.search('revert') >= 0
        assert(revertFound, `Expected "revert", got ${error} instead`)
    }
}

module.exports = revertPromise