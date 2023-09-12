const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

//views MVC
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

const routeHandler = require('./routes');
app.use('/', routeHandler); //one handler for routes

app.listen(3000, () => console.log(`Server is running`));
