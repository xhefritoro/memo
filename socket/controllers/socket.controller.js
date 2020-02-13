const SocketModel = require("../models/socket.model")


// Returns attribute that notes will contain which will be retrieved from mysql currently mocked.
exports.initData =(socket, type)=>{
    var response={};
    // Generate id
    response["id"] = Math.floor(Math.random() * 10000)

    // Get fields based on type
    SocketModel.initData(type).then((data)=>{
        data.forEach(element => {
            response[element.attributeKey]= element.attributeText;
        })
        socket.emit("init",response)
    }).catch((err)=>{
        socket.emit("init", err);
    });

}

// Returns data for each note available on redis currently mocked.
exports.getNotes =(socket, id)=>{
    SocketModel.getMemoById(id).then((data)=>{
        socket.emit("getNotes",data);
    }).catch((err)=>{
        socket.emit("getNotes", err);
    });
}

exports.setNotes =(socket, data)=>{
    let object = JSON.parse(data);
        SocketModel.setMemo(object).then((rsp)=>{
            socket.emit("setNotes", rsp);
        }).catch((err)=>{
            socket.emit("setNotes", err);
        });
}



