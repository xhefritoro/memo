const redis = require('../../common/services/redis.service').redisClient;
const mysql = require('../../common/services/mysql.service').mysql;

exports.initData = (type)=>{
    return new Promise((resolve, reject) => {
        mysql.query(`SELECT  
                    MemoListToAttributes.attributeKey,
                    MemoListToAttributes.attributeText
                    FROM Memo.MemoList 
                    LEFT JOIN Memo.MemoListToAttributes ON MemoListToAttributes.memoid = MemoList.id
                    WHERE MemoList.type = ?`,[type], function (error, results, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
      });
}

exports.setMemo = (object) =>{
    return new Promise((resolve, reject) => {
        redis.json_set(object.id,".",JSON.stringify(object.data), function (err) {
            if (err) { reject({
                code:400,
                Message: err
                }); }
            else{ resolve({
                code:200,
                Message: "Success"
                })}
        });
      });
}
exports.getMemoById = (id) =>{
    return new Promise((resolve, reject) => {
        redis.json_get(id , '.', function (err,value) {
            if (err) { reject({
                code:400,
                Message: err
                }); }
            else{ resolve({
                code:200,
                Message: "Success",
                data: value
                })}
        });
      });
}
