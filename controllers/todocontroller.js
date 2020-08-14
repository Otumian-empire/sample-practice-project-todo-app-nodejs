const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://otumian:<password>@cluster0.yzrsw.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


let data = [
    { item: 'Commit code before you shut pc down' },
    { item: 'Order coffee at 9am from DD\'s coffee shop' },
    { item: 'Call Kevin about the renegotiation of the contract at 3pm' },
    { item: 'Feed the dog at 3:30pm' },
    { item: 'Watch anine - One pounch man' },
    { item: 'Sing kumbaya' }

]

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', { todos: data })
    })

    app.post('/todo', bodyParser.urlencoded({ extended: false }), function (req, res) {
       data.push(req.body) // add to data
       res.json(data) // retuen data
    })

    app.delete('/todo/:item', function (req, res) {
       data = data.filter(function (todo) {
           return todo.item.replace(/ /g, '-') !== req.params.item
       })

       res.json(data)
    })
}