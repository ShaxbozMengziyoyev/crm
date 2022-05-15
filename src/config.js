const PORT = process.env.PORT || 9000

const connection = {
  connectionString: 'postgres://postgres:1324306@localhost:5432/srm'
}

module.exports = {
  PORT,
  connection
} 