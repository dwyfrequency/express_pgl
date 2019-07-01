const express = require('express');
const { postgraphile } = require('postgraphile');
// const PgSimplifyInflectorPlugin = require('@graphile-contrib/pg-simplify-inflector');

const app = express();
const schema_name = 'public';
const database = 'postgres://jackdwyer@localhost:5432/juke';
const pglConfig = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
};
app.use(postgraphile(database, schema_name, pglConfig));

app.listen(5000);
