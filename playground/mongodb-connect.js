// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    
    console.log('Connected to mongo DB');
     var db = client.db('TodoApp');

    
    db.collection('Users').insert([{
        _id:55,
        name:'Bucky',
        age:95,
        location:'U.S'
    },{
        name:'Yuvaraj',
        age:45,
        location:'Japan'
    }],(err,result)=>{
        if(err){
            return console.log('Unable to create User',err);
        }
        
        console.log(JSON.stringify(result.ops,undefined,2));
    })

    client.close();
})