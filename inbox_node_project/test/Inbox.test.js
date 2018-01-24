// native node module
const assert = require('assert');

const ganache = require('ganache-cli');

// uppercase because Web3 is a constructor function.
// after v1.x.x promises/async await is supported
// but not earlier
const Web3 = require('web3');

// creates an instance of web3
// that will connect to the ganache
// provided local test Ethereum network
// ganache automatically creates
// test accounts whenever it's test network
// loads up
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

describe('Inbox Smart Contract', () => {
    let accounts;
    let inbox;

    beforeEach(async () => {
        // an async/await function will return a promise
        // the lines that say 'await' will block the code below's
        // execution until a value is resolved. 
        // a try/catch could be used to handle rejected 
        // promises

        // get a list of all accounts
        accounts = await web3.eth.getAccounts();
                
        // use one of those accounts to deploy the contract
        // interface is a stringified obj, hence JSON.parse
        // many accounts are given by ganache, though
        // we just chose to use the first one arbitrarily 
        inbox = await new web3.eth.Contract(JSON.parse(interface))
                                  .deploy({ 
                                      data: bytecode, 
                                      arguments: [ 'Initial Message' ] 
                                  })
                                  .send({ 
                                      from: accounts[0], 
                                      gas: '1000000' 
                                  });
    });

    it('Deploys a contract', (done) => {
        console.log('accs', accounts);
        console.log('inbox', inbox);
        done();
    });
});