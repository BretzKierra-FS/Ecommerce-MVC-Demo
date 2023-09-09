const express = require('express');
const app = express();

//views MVC
app.set('views', __dirname + '/templates/views');
app.set('view engine', 'twig');

app.use(
  express.urlencoded({
    extended: true,
  })
);

const routeHandler = require('./routes');
app.use('/', routeHandler); //one handler for routes

app.listen(3000, () => console.log(`Server is running`));
