var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://SamRaj:ur12cs206@ds161764.mlab.com:61764/nodedb'||'mongodb://localhost:27017/TodoApp');

module.exports ={mongoose};