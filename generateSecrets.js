const crypto = require('crypto');

const generateSecret = () => crypto.randomBytes(16).toString('base64');
const generateSalt = () => crypto.randomBytes(16).toString('base64');

console.log('Generated Secret:', generateSecret());
console.log('Generated Salt:', generateSalt());

