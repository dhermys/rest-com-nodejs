const mysql = require('mysql2')

const conexao = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: 3306,
    password: 'rosA2013*',
    database: 'agenda-petshop'
})

module.exports = conexao