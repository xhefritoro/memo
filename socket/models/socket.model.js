const redis = require('../../common/services/redis.service').redisClient;
const mysql = require('../../common/services/mysql.service').mysql;

exports.test = ()=>{
    redis.json_set('my-json', '.', '{"test":1234}', function (err) {
        if (err) { throw err; }
         console.log('Set JSON at key');
         redis.json_get('my-json', '.test', function (err, value) {
          if (err) { throw err; }
          console.log('value of test:', value); //outputs 1234
        //   redis.quit();
        });
      });
}