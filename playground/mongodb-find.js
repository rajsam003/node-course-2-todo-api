//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //db.collection('Todos').find().toArray().then((docs)=>{
    //db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     db.collection('Todos').find({
    //         _id : new ObjectID('5c416c1a974bfd1f18edee22')
    //     }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Sam'}).count().then((count)=>{
        console.log(`Users count ${count}`);
    }, (err)=> {
        console.log('Unable to fetch users ', err);
    });

    client.close();

});