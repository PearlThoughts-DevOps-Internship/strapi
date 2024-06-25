const crypto = require('crypto');

const generateKey = () => crypto.randomBytes(32).toString('hex');

const defaultKey1 = generateKey();
const defaultKey2 = generateKey();

console.log(`defaultKey1: ${defaultKey1}`);
console.log(`defaultKey2: ${defaultKey2}`);

