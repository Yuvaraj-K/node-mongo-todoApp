require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todos');
var { User } = require('./models/user');


var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos })
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid ID');
    }
    Todo.findById({
        _id: id
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send('ID not found');
        }
        res.send(todo)
    }, (e) => {
        res.status(400).send();
    });

});

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid ID');
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('ID not found');
        }
        res.send(todo)
    }, (e) => {
        res.status(400).send();
    });

});

app.patch('/todos/:id', (req, res) => {

    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid ID');
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completedAt = null;
        body.completed = false;        
    }
    Todo.findByIdAndUpdate(id, { $set: body }, { $new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send('ID not found');
        }
        res.send({ todo })
    }, (e) => {
        res.status(400).send();
    });
})

app.listen(port, () => {
    console.log(`Starting in port ${port}`);
});