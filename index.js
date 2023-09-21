const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static('public'));

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
app.get('/', (req, res) => {
  res.render('views/home.html.twig');
});

app.listen(3000, () => console.log(`Server is running`));
