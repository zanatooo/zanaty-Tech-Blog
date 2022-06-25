const Squelize = require('seauelize');
const { Sequelize } = require('sequelize/types');
require('dotenv').config();

let sequelize;

if (process.env.JAWSD_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);

}
else {
    sequelize = new Sequelize(process.eventNames.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost', 
        dialect: 'mysql',
        port: 3306
    });
}
module.exports = sequelize;