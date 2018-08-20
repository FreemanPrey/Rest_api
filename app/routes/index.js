const noteRoutes = require('./note_route');
module.exports = function (app,db, user) {
    noteRoutes(app, db, user);
};