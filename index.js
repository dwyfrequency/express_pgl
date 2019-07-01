const express = require('express');
const { postgraphile } = require('postgraphile');
const { express: voyagerMiddleware } = require('graphql-voyager/middleware');

const app = express();

const schemaName = 'public';
const databaseName = 'juke';
const username = 'jackdwyer';
const database =
  process.env.DATABASE_URL ||
  `postgres://${username}:@localhost:5432/${databaseName}`;
const pglConfig = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
};

app.use(postgraphile(database, schemaName, pglConfig));

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.listen(5000);
