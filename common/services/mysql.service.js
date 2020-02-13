const mysqlLib = require('mysql');
const config = require('../config/env.config')
let count = 0;


const options = {
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPwd
};
const mysql = mysqlLib.createConnection(config.mysql);



const connectWithRetry = () => {
    console.log('Mysql connection with retry')
    mysql.connect(function(err) {
        if (err) {
            console.log('Mysql connection unsuccessful, retry after 5 seconds. ', err.stack, ++count);
            setTimeout(connectWithRetry, 5000)
        }else{
            console.log('Mysql is connected')
            return mysql;
        }});
};

connectWithRetry();

exports.mysql = mysql;
exports.dummy = "cam";
