const knex = require("knex");
const app = require("./app");
const { PORT, DATABASE_URL } = require("./config");

console.log(DATABASE_URL);
const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});
console.log('database url', DATABASE_URL)
db.raw('select 1').catch(err => {
  console.log('FAILED TO CONNECT')
  console.log(err)
  process.exit(1)
})

app.set("db", db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
