const Pool = require('pg').Pool

const connection = new Pool({
//Put yor info here
})
module.exports = connection;
