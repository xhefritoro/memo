const UsersModel = require("../models/users.model")

// Send index.html
exports.getIndexHTML = (req,res)=>{
    UsersModel.path().then((data)=>{
        console.log(data)
        res.sendFile(data);
    })

}



