const mysql = require("mysql");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");

      const config = {
        connectionLimit: 100,
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
      };

      this.pool = mysql.createPool(config);

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
