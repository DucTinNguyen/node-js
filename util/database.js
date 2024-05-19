const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "node-study"
})
module.exports = pool.promise();
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('node-study', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// })
// module.exports = sequelize;