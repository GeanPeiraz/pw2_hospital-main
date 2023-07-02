
const sequelize = require('sequelize');

const connection = new sequelize(
    'pw2_hospital',
    'root',
    '',
    {
        host:'localhost',
        port:'3307',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;