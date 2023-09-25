// constantes
const express = require('express')
const app = express()
const port = 5000

const config = {
    host: 'db',
    user: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const insert_sql = `INSERT INTO people(name) VALUES('Lucas')`
const select_sql = `SELECT name from people`

// funções para interagir com db
function insert_one_input_into_table() {

    connection.query(insert_sql, function (error, result) {
        if (error) throw error;
        console.log("1 linha inserida na tabela people, ID: " + result.insertId);
    });
}

function select_all_data_from_db(callback) {
    
    connection.query(select_sql, (error, result) => {
        if (error){
            throw error;            
        } else {
            return callback(result);
        }
    });
}


// rotas
app.get('/', (req,res) => {

    insert_one_input_into_table();
    select_all_data_from_db(function(result) {
        let names = '';
        result.forEach(row => names += '<p>' + row.name + '</p>');
        res.send('<h1>Full Cycle Rocks!</h1>' + names);
    });
})


app.listen(port, () => {
    console.log('running on port ' + port);
})
