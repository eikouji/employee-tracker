const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "({ process.env.MySqlP })",
    database: "employees"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;