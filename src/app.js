const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDLEWEARE
app.use(morgan('dev'))

//STACTIC FILES
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/index.routes'));

module.exports = app;