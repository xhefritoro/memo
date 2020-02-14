const redis = require('../../common/services/redis.service').redisClient;
const mysql = require('../../common/services/mysql.service').mysql;

exports.path = ()=>{
    return new Promise((resolve, reject) => {
        resolve(__dirname+"/index.html");
      });
}

