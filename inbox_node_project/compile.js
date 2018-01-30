const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// the : before Inbox is there because if there's multiple
// Inbox contracts in different files, the filename for each
// contract would go before the : to differentiate the contracts
module.exports = solc.compile(source, 1).contracts[':Inbox'];
