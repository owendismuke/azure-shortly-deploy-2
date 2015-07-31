var mongoose = require('mongoose');
var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/shortlydb';
mongoose.connect(uri);


var db = mongoose.connection;

module.exports = db;