const config = require('./common/config/env.config.js');
const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);

const bodyParser = require('body-parser');


const SocketRouter = require('./socket/routes.config');
const UsersRouter = require('./Users/routes.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    res.header( 'Content-Length', 'X-Foo', 'X-Bar');
    bodyParser.urlencoded({extended: false});

    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

SocketRouter.routesConfig(io)

UsersRouter.routesConfig(app);

app.use(bodyParser.json());


app.listen(3000, function (){
    console.log('app listening at port %s', 3000);
}) 

http.listen(config.port, function () {
    console.log('http listening at port %s', config.port);
});
