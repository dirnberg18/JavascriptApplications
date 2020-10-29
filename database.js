const Pool = require('pg').Pool

const connection = new Pool({
//Put your configuration here
})
module.exports = connection;
