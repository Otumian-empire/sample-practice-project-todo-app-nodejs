const router = require("express").Router()
const { db } = require('../db/index')

router.get('', (req, res) => {
    db.readTasks()
        .then(todos => res.render('todo', { todos: todos.rows }))
        .catch(err => console.log(err.stack))
})

router.post('', (req, res) => {
    const { item } = req.body

    db.createTask(item)
        .then(() => res.json({ 'success': true }))
        .catch(() => console.log(err.stack))

})

router.delete('', (req, res) => {
    const { id } = req.body
    
    db.deleteTask(id)
        .then(() => res.json({ 'success': true }))
        .catch(err => console.log(err.stack))
})

module.exports = { router }
