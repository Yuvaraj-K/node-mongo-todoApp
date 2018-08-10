const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to DB');
    }
    
    console.log('Connected to mongo DB');
     var db = client.db('TodoApp');

    
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5b6685dd1c40cf1e24e8770a")
    },{
        $set:{
            name:'Steve rogers'
        },
        $inc:{
            age:9
        }
    },{
        returnOriginal: true
    }).then((result)=>{
        console.log(`${JSON.stringify(result,undefined,2)}`);
    });


  

})