// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    
    console.log('Connected to mongo DB');
     var db = client.db('TodoApp');

    
    db.collection('Users').find({
        name:'Yuvaraj'
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    })

    // db.collection('Users').find({}
    //     name:'Yuvaraj'
    // }).count().then((count)=>{
    //     console.log(`Todo count ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

})