[![Build Status](https://travis-ci.org/FriendlyUser/Vue-Dapp.svg?branch=master)](https://travis-ci.org/FriendlyUser/Vue-Dapp)
# Summary

The can viewed at http://myFirstdApp.surge.sh, also this app uses vuetify, vue, metamask and truffle.

This app will eventually become my decentralized todo-list on ropsten, that way I can keep what I need to do and cannot be altered. 

This app will eventually be deployed on all test nets including ropsten, kovan and rinkeby via infura.

### Todo List

- ~~Decide or using vue-bootstrap or equaivalent~~
- start adding more tests for truffle 
- Deploy to test networks, ~~ropsten~~ and rinksby


Probably will end up using https://www.npmjs.com/package/vue-chartjs for charts (who owns the tokens) and 
https://www.npmjs.com/package/vee-validate to verify inputs and I will use vuetifyjs partly to experiment with a new ui framework and become more familar with front-end development in addition to copying the "login-form lol".


### References for CI

Used 
- https://flatmap.it/2017/11/16/starting-selenium-server-inside-travis/.
- and pointers for the truffle-ci box.
- https://truffleframework.com/tutorials/using-infura-custom-provider
# Vue.js truffle box

A [`truffle box`](http://truffleframework.com/boxes/) to serve as the foundation of any [`Truffle`](http://truffleframework.com) and [`Vue.js`](https://vuejs.org/) dApp. Comes with [`Vue.js`](https://vuejs.org/), [`vue-router`](https://router.vuejs.org/en/), [`Vuex`](https://vuex.vuejs.org/en/intro.html) and [`sass-loader`](https://github.com/webpack-contrib/sass-loader). A minimalist user authentication smart contract is also provided.

## Directory structure

This truffle box is crafted to enforce a clean directory structure.

```
/
|
+-- build/
|   |
|   +-- contracts/
|   |   |
|   |   + truffle compiled contracts
|
+-- config/
|   |
|   +-- babel/
|   |   |
|   |   + babel config files - to come (babel does not allow to specify a custom config file path - yet - so the babel configuration occurs in the package.json file for now)
|   |
|   +-- eslint/
|   |   |
|   |   + estlint config files
|   |
|   +-- postcss/
|   |   |
|   |   + postcss config files
|   |
|   +-- vue-loader
|   |   |
|   |   + vue-loader config files
|   |   
|   +-- webpack/
|   |   |
|   |   + webpack config files
|   
+-- contracts/
|   | 
|   + solidity contracts
|
+-- migrations/
|   |
|   + truffle migrations files
|
+-- scripts/
|   |
|   + webpack scripts
|
+-- src/
|   |
|   + vue.js dapp files
|
+-- static/
|   |
|   + vue.js dapp static files
|
+-- test/
|   |
|   +-- e2e/
|   |   |
|   |   + e2e test files
|   |
|   +-- truffle/
|   |   |
|   |   + truffle test files
|   |
|   +-- unit/
|   |   |
|   |   + unit test files
```

## Installation

1. Install [Truffle](http://truffleframework.com) and an Ethereum client - like [EthereumJS TestRPC](https://github.com/ethereumjs/testrpc).
	```
	npm install -g truffle // Version 3.0.5+ required.
	npm install -g ganache0cli
	```

2. Download this repo
	
3. Launch [`testrpc`](https://github.com/ethereumjs/testrpc).
	```
	testrpc <options>
	```

4. Compile and migrate the contracts.
	```
	truffle compile
	truffle migrate
	```

5. Run the webpack server for front-end hot reloading. Smart contract changes do not support hot reloading for now.
	```
	npm run start
	```
    
## Tests
This box comes with everything bundled for `unit`, `e2e` and `truffle` contracts testing.

1. `unit` and `e2e` tests.
	```
	npm run test/dapp
	```

2. `truffle` contracts tests.
	```
	npm run test/truffle
	```
    and you can run the tests by using

	```
	 truffle test --network devleopment test/truffle/TestUsers.sol test/truffle/user.js
	```
3. Alternatively you can directly run `unit`, `e2e` and `truffle` contracts tests in one command.
	```
	npm run test
	```

## Build for production
To build the application for production, use the build command. A production build will be compiled in the `dist` folder.
```javascript
npm run build
```


#### Viewing Documentation

Viewing the docs can be build using the npm package http-server, because I'm using the plant-uml plugin, files must be built and then viewed.

` http-server ./build -i`
### Tasks complete 

#### Things to Added to this truffle box

- ~~Implement Continuous Integration/Continuous Deployment (via surge)~~
- ~~Creating a documentation format (jsdoc, sphinx or possibly latex based, maybe docsuarus)~~
- !!allow for all documentation to be generated by a script~~ complied with scripts
- ~~Deploy a navigation bar in vue.js instead of react (finish by July 8)~~.
#### References
* [Link](https://itnext.io/create-your-first-ethereum-dapp-with-web3-and-vue-js-part-2-52248a74d58a)
* [Dapp Uni] (https://github.com/dappuniversity)
* [Dapp Tutorial](https://github.com/danielefavi/ethereum-vuejs-dapp)