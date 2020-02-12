const SocketModel = require("../models/socket.model")


// Returns attribute that notes will contain which will be retrieved from mysql currently mocked.
exports.initData =(socket)=>{

    console.log("controller")
    SocketModel.test();

    socket.emit("init", //"Hello" );
    [{"fields":[
            "noteTitle",
            "noteBody",
            "noteDetails"
    ]}]);

}

// Returns data for each note available on redis currently mocked.
exports.getNotes =(socket)=>{
    console.log("controller")

    socket.emit("getNotes", 
    [
        {
            "noteTitle":"Example1",
            "noteBody" : "This is a mocked test for front end",
            "noteDetails": {
                "timeStamp" : "mm-dd-yyyy T:hh:mm:ss",
                "userAuthor" : "Mocking"
            }
        },
        {
            "noteTitle":"Example2",
            "noteBody" : "This is a mocked test for front end",
            "noteDetails": {
                "timeStamp" : "mm-dd-yyyy T:hh:mm:ss",
                "userAuthor" : "Mocking"
            }
        }
    ]);
}



