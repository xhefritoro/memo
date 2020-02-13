const SocketController = require('./controllers/socket.controller');


exports.routesConfig = function (socket) {

    socket.on("init", async function(type){
        await SocketController.initData(socket, type);
        
    });


    socket.on("getNotes", async function(id){
        await SocketController.getNotes(socket,id);
        
    });


    socket.on("setNotes", async function(data){
        await SocketController.setNotes(socket,data);
        
    });
}
