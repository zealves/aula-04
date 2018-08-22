var mongoose = require('mongoose');
var db;

module.exports = function() {
    if(!db)
    {
        db = mongoose.createConnection('mongodb://localhost/aula-04',{ useNewUrlParser: true });
    }
    return db;
}




