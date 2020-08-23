const { client } = require('./config')

const db = {
    createTask: item => client.query(`INSERT INTO task(item) VALUES($1)`, [item]),
    deleteTask: id => client.query(`DELETE FROM task WHERE id=$1`, [id]),
    readTasks: () => client.query(`SELECT id, item FROM task;`),
}

module.exports = { db }
