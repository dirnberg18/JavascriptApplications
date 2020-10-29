const Pool = require('pg').Pool

const connection = new Pool({
  user: 'miilxykauqjtis',
  host: 'ec2-54-246-85-151.eu-west-1.compute.amazonaws.com',
  database: 'd6p25ffbcdifin',
  password: '5e9db7d91ded0356867c3b585e45be50475128cc1a9b59ab49e9f5f4bc4690bd',
  port: 5432,
})
module.exports = connection;