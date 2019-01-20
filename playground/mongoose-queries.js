const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Users} = require('./../server/model/users');

var id = '5c41c200b9686112d4d1a33e';

//To show the array object
//Users.find()
//To show the object by one field
//Users.findByOne
//To show the object by ID
Users.findById(id).then((user) => {
    if(!user){
        return console.log('ID not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));