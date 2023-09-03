const express = require('express');
const app = express();

/* body parcer is no longer required for express in current verson*/
// const bodyParser = bodyParser.urlencoded({ extended: false });
// app.use(bodyParser);
app.use(
  express.urlencoded({
    extended: true,
  })
);

const routeHandler = require('./routes');
app.use('/', routeHandler); //one handler for routes

app.listen(3000, () => console.log(`Server is running`));
