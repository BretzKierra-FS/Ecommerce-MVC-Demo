const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

//views MVC
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

app.use(
  express.urlencoded({
    extended: false,
  })
);

const routeHandler = require('./routes');
app.use('/', routeHandler); //one handler for routes

app.listen(3000, () => console.log(`Server is running`));
