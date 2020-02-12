const SocketController = require('./controllers/socket.controller');


exports.routesConfig = function (socket) {
    socket.on("init", 
    [
        SocketController.initData(socket)
    ]);


    socket.emit("getNotes", 
    [
        SocketController.getNotes()
    ]);
}
