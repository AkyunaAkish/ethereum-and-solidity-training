// version of solidity we're using in this file
pragma solidity ^0.4.17;

// Defines a new contract that will have some 
// number of methods and variables(contracts are similar to classes)
// when you deploy a contract to an ethereum network, that contract
// will need to be "newed" up creating instances of the smart contract
// example: new Inbox("my message");
contract Inbox {
    // Declares a storage variable
    // which exists for the life of an instance
    // of this contract.
    // It's type string, public which means 
    // solidity will automatically create a getter method
    // named message() that can be called to return this value
    string public message;
    
    // Inbox function that takes a string as an argument
    // because this function has the same name as the contract
    // this function is considered a constructor function
    // this function will be called once whenever this contract
    // is initialized.
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    // setter method which takes a string as an argument
    // and updates the storage variable message with that argument's value
    function setMessage(string newMessage) public {
        message = newMessage;
    }

        
    // NOT A NECCESSARY METHOD: message is public which means
    // a getter was made for us called message()
    // -----------------------------------------------------------------------------
    // getter method that returns the current value of the message
    // storage variable. 
    // -----------------------------------------------------------------------------
    // the function type: "public view"
    // most common function types:
    // public: anyone with an ethereum account can call this function
    // private: only this contract can call this function(best for helper functions)
    // view(more modern way than constant): this function returns data and does not 
    // modify the contract's data
    // constant: this function returns data and does not modify the contract's data
    // pure: function will not modify or even read the contract's data
    // payable: when someone calls this function they might send ether along
    // -----------------------------------------------------------------------------
    // the return type: needs to be one string: "returns (string)"
    function getMessage() public view returns (string) {
        return message;
    }

    // each operation in a contract costs a certain amount
    // of gas/wei/ether(same thing generally speaking)
    // the transaction will come with a startGas/gasLimit
    // so that if the transaction costs more than the limit
    // the transaction will not happen complete, it will stop
    // once there is not enough gas to complete the function
    // a gasPrice will also be passed in, defining how many
    // units of wei the 'customer' is willing to pay per
    // unit of gas
    // function doMath(int a, int b) {
    //     a + b; // costs 3 gas
    //     b - a; // costs 3 gas
    //     a * b; // costs 5 gas
    //     a == 0; // costs 3 gas
    // // there are spreadsheets you can find on google to see the price per operation
    // // even creating variables costs gas, everything costs gas
    // }
}
