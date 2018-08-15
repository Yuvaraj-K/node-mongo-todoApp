const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b6ddcc7a0fb0b13b0fc35de'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b6ddcc7a0fb0b13b0fc35de').then((todo) => {
  console.log(todo);
});
