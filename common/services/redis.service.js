const redis = require('redis');
const rejson = require('redis-rejson');
rejson(redis);


const config = require('../config/env.config')


const redisClient = redis.createClient();
const connectWithRetry = async () => {
    await redisClient.on('connect', function(err) {
        if(err){
            console.log('Something went wrong ' + err);
            setTimeout(connectWithRetry, 5000)
        }else{
            console.log('Redis Connected :) ');
        }
        
    });
}
connectWithRetry();

exports.redisClient = redisClient;