const jsonServer = require('json-server');
const server = jsonServer.create();
const database = require('./db');
const router = jsonServer.router(database);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
