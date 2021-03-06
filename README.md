### Notes from Ethereum and Solidity Training Course

#### Bitcoin History
- October 31, 2008
  - A white paper describing peer to peer payments without a financial itermediary like banks was released
  -  It cited transaction reversals as an issue with online commerce - the ability of customers to charge back a purchase
  - Satoshi Nakamoto released the white paper though the identity of this person or group is unknown
  - Whitepaper: https://bitcoin.org/bitcoin.pdf

#### Ethereum History
- Vitalik Buterin(Russian) created Ethereum late 2013
  - Uses 'smart contract' which is code that lives in the Ethereum block chain. These contracts are at the core of what Ethereum is. 
  - Uses the concept of DAC(decentralized autonomous corporations)
    - Basically a corporation split into sub-corporations where decisions are made based on votes from shareholders. Shareholders who own more Ethereum have more voting power.
  - Whitepaper: http://web.archive.org/web/20131228111141/http://vbuterin.com/ethereum.html


#### Ethereum Tools
- For Developers to connect:
  - Web3.js
- For Consumers to connect:
  - Metamask(chrome extension)
  - Mist Browser
- Test sending ether to metamask rinkeby test server: http://rinkeby-faucet.com/
  - Another(where you have to make a social media post only containing your rinkeby account address to get the ether): faucet.rinkeby.io

#### Solidity Smart Contracts
- Written in solidity language(.sol files)
  - Strongly Typed
  - Similar to Javascript(sort of)
  - Gets compiled before deployment
  - Application Binary Interface(ABI)
    - Translates Solidity smart contract byte code to a usable data format for Javascript to use the smart contract
  - Doesn't require long development time
    - More time is invested in writing applications around the Solidity smart contracts that interact with the smart contracts
  - Solidity online editor: ---> REMIX ONLINE CONTRACT EDITOR!!!!!! ---> http://remix.ethereum.org/
    - Remix can be used to test contracts by compiling to bytecode and sending contract to a fake ethereum network and create an instance of your contract on that fake network
      - You can write a contract, press run, select javascript VM environment(which is the in-browser virtual ethereum network),then configure the settings as needed, and then you can hit the run/play button
    - Once 


#### General Transaction
- Transaction properties:
  - nonce(stands for nonsense): how many times the sender has sent a transaction
  - to: address of account this money is going to
  - value: amount of 'wei' to send to the target address
  - gasPrice: amount of wei the sender is willing to pay per unit of gas to get this transaction processed
  - startGas/gaslimit: units of gas that this transaction can consume
  - v/r/s: cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key

#### External Account to create Contract Transaction
- Transaction properties:
  - nonce(stands for nonsense): how many times the sender has sent a transaction
  - to: if this is left blank, the user is attempting to create a new contract
  - data: compiled bytecode of the contract
  - value: amount of 'wei' to send to the target address
  - gasPrice: amount of wei the sender is willing to pay per unit of gas to get this transaction processed
  - startGas/gaslimit: units of gas that this transaction can consume
  - v/r/s: cryptographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key

#### Solidity Gotchas:
- Whenever a transaction is submitted, it takes time to be mined via a proof of work algorithm in order to reach consensus as to whether or not your transaction is valid. 
- If you make a function with the same name as your contract within your contract, that will be treated as a constructor function and invoked whenever the contract gets invoked/instantiated.
- A function that will be used in a transaction such as setMessage in the inbox contract cannot return values. If you try you won't get an error, but because that function will be used in a transaction, which is asynchronous, only a transaction hash will be returned from that function when the transaction is completed, despite what you code it to return. 
- Sending a transaction to a function within a smart contract costs money. (Gas, which is some amount of ether) Gas is used as a price for a miner to charge for completing your transaction for you. 
- Test networks have very quick/sometimes instant block times, so the transactions are asynchronous but the test networks are just much quicker than the real ethereum network. 
- 1 Ether is 1,000,000,000,000,000,000 'Wei'(wei is always rounded to the nearest whole number, no decimals) converter: https://etherconverter.online/


#### MetaMask
- Allows for users to transfer Ether within different Ethereum networks in the browser through a Chrome extension
- You can create as many accounts as you'd like(for example: spending, savings, business, etc)
- Each account has an address, public, and private key
- Creates 12 word mnemonic phrases as a type of password to secure your account keys/tokens/hexadecimal hashes. Each mnemonic phrase is per metamask extension per browser for all accounts on that extension. To get a new phrase, uninstall/reinstall metamask. 
- Side Note: Mnemonic means a series of easy to memorize words.
- Mnemonic Code Converter(to see how your mnemonic phrase converts into account addresses/public and private keys): https://iancoleman.io/bip39/

#### Truffle
- Command line tool that can aid in contract creation, local contract testing, and contract deployment for example to the Rinkeby network
- Undergoing rapid development(some features are not perfect or completed at this point(01/24/2018))
- Library can change and old code can become deprecated quickly

#### Web3
- Can be used to deploy contracts to an ethereum network
- Can be used to get access to existing contracts on an ethereum network(requires having the address of the deployed contract you're targeting)
- The Sole interface between nodejs and an ethereum network

#### Solidity with NodeJS
- Install npm package: "solc" to compile your solidity code in Node
  - Example in: ./inbox_node_project/compile.js
- Deployment of contract bytecode can be done with Ganache(previously known as TestRPC). Ganache creates a local Ethereum test network for you to use for development(production code would take some time to complete, but Ganache completes transactions almost instantaneously). 
- Web3 is used to interact with the Ethereum network and your deployed contracts
  - Currently going through a rewrite, code in this repo is 1.0.0-beta.26. 

#### Infura API
- Allows for an easy connection to the Rinkeby network
- An alternative would be to run an ethereum node locally and have that node communicate to Rinkeby, but that would be much more work

#### Etherscan
- https://rinkeby.etherscan.io/
- https://etherscan.io/   (main network)
- Reads all contracts on main ethereum networks including main and test networks
- Contract addresses can be searched in the top right search bar(the contract address will be returned after deploying a contract with web3 in your code)