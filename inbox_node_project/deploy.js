const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// the HDWalletProvider is used to
// connect to a target network, 
// and unlock an account for use on that target network
// by taking an account mnemonic(which generates the public/private/address keys for the account).
// we specify that the provider should connect to an infura ethereum node(the second arg to HDWallet)
const provider = new HDWalletProvider(
    'theme twist heart suffer effort fiction ladder actor bamboo clutch shrug sample',
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

// an instance of web3 that connects to your specified provider
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0]);
    
    // the interface is the 'ABI'
    const result = await new web3.eth.Contract(JSON.parse(interface))
                                     .deploy({ 
                                               data: bytecode, 
                                               arguments: [ 'Initial Message!' ] 
                                             })
                                     .send({ gas: '1000000', from: accounts[0] });
    
    // deployed contract address on rinkeby
    console.log('Contract deployed to: ', result.options.address);
};

deploy();