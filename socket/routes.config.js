const SocketController = require('./controllers/socket.controller');


exports.routesConfig = function (io) {
    io.on('connect', (socket)=>{
        socket.on("init", async function(type){
            await SocketController.initData(socket, type);
            
        });
    
    
        socket.on("getNotes", async function(id){
            await SocketController.getNotes(socket,id);
            
        });
    
    
        socket.on("setNotes", async function(data){
            await SocketController.setNotes(socket,data);
            
        });
        socket.on("test", async function(data){
            console.log(data);
            io.emit("test");
            
        });
    })
    
}
