var db = require('../mongoose_config');
var crypto = require('crypto');
var mongoose = require('mongoose');


var linkSchema = mongoose.Schema({
  url: { type: String, maxlength: 255 },
  baseUrl: { type: String, maxlength: 255 },
  code: { type: String, maxlength: 100 },
  title: { type: String, maxlength: 255 },
  visits: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

linkSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
})

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;

