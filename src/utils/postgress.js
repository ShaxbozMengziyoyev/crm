const {Pool} = require("pg")
const {connection} = require("../config")

const pool = new Pool({
  connectionString: connection.connectionString
})