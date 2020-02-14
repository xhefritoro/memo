const UsersController = require('./controllers/users.controller');


exports.routesConfig = function (app) {

    app.get('/',
        UsersController.getIndexHTML,
    );
}
