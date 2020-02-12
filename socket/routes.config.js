const SocketController = require('./controllers/socket.controller');


exports.routesConfig = function (socket) {

    socket.on("init", async function(test){
        console.log(test)
        console.log("init")
        await SocketController.initData(socket);
        
    });


    socket.on("getNotes", async function(){
        console.log("getNotes")
        await SocketController.getNotes(socket);
        
    });
}
