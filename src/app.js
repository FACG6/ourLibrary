const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const favicon = require('serve-favicon');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/index');

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'library.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false,
}));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));
app.use(controllers);

module.exports = app;
