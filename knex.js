// module.exports = require("knex")({
//   client: "mysql2",
//   connection: {
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB_NAME,
//     port: process.env.MYSQL_PORT || 3306,
//   },
// });

module.exports = require("knex")({
  client: "mysql2",
  connection: {
    host: "us-cdbr-east-05.cleardb.net",
    user: "b1aff09bf62ad2",
    password: "d32eb8d7",
    database: "heroku_f0f3fbf36e151e4",
    port: process.env.MYSQL_PORT || 3306,
  },
});
