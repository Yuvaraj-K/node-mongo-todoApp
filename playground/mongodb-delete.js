const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    
    console.log('Connected to mongo DB');
     var db = client.db('TodoApp');

    
    // db.collection('Users').deleteMany({
    //     name:'Yuvaraj'
    // }).then((result)=>{
    //     console.log(`deleteMany ${result}`);
    // });

    // db.collection('Users').deleteOne({
    //     name:'Yuvaraj'
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id:55
    }).then((result)=>{
        console.log(`findOneAndDelete ${JSON.stringify(result,undefined,2)}`);
    });

  

})