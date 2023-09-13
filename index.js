const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

//views MVC
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

const routeHandler = require('./routes');
app.use('/', routeHandler); //one handler for routes

app.listen(3000, () => console.log(`Server is running`));
