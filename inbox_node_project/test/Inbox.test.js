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
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

describe('Inbox Smart Contract', () => {
    let accounts;
    let inbox;
    const initialMessage = 'Initial Message';

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
        // the send method actually sends a transaction to the network
        // which completes the deployment process
        inbox = await new web3.eth.Contract(JSON.parse(interface))
                                  .deploy({ 
                                      data: bytecode, 
                                      arguments: [ initialMessage ]
                                  })
                                  .send({ 
                                      from: accounts[0], 
                                      gas: '1000000' 
                                  });
              
        inbox.setProvider(provider);                          
    });

    it('Deploys a contract that has an address', () => {
        // assert.ok checks if a value is defined 'truthy'
        assert.ok(inbox.options.address);
    });

    it('Has a default message', async () => {
        // args for the message func can be passed into message()
        // args for transaction details gas/gasLimit/etc can
        // be passed into call()
        const message = await inbox.methods.message().call();
        assert.equal(message, initialMessage);
    });

    it('Can change the message', async () => {
        const newMessage = 'Hi There!';

        // .send({}) sends the transaction to the 
        // ethereum network and requires an account 
        // address to be responsible for the cost of gas
        await inbox.methods.setMessage(newMessage).send({ 
                                                           from: accounts[0] 
                                                        });

        const message = await inbox.methods.message().call();
        assert.equal(message, newMessage);
    });
});

