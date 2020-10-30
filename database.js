const Pool = require('pg').Pool

const connection = new Pool({
  user: 'wvzpukdgfmfsae',
  host: 'ec2-52-31-233-101.eu-west-1.compute.amazonaws.com',
  database: 'dfq4qjarqkoetf',
  password: '7ad738698eb028b49e50387c29a6f1e9f2fa1e218cc0fe0cf1e07564294fcf09',
  port: 5432,
})
module.exports = connection;