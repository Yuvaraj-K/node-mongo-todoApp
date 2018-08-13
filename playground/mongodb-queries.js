var { ObjectID } = require('mongodb');

var { User } = require('./../server/models/user');
var { Todo } = require('./../server/models/todos');
var { mongoose } = require('./../server/db/mongoose');


var id = '5b71d72dbff33315bc1dc39a';

if(!ObjectID.isValid(id)){
    console.log('Invalid ObjectID');
}
// User.find().then((todos)=>{
//     console.log('Returns All Todos',todos);
// });

// User.find({
//     _id:id
// }).then((todo)=>{
//     console.log('Todos find _id ',todo);
// }).catch((e)=>console.log(e))

// User.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo FindOne',todo);
// }).catch((e)=>console.log(e))

User.findById({
    _id:id
}).then((todo)=>{
    if(!todo){
        return console.log('ID not found');
    }
    console.log('Todo findById',todo);
}).catch((e)=>console.log(e))