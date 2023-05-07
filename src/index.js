const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const ejs = require('ejs');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//connect DB
db.connect();

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(morgan('combined'));

//template engine
app.set('view engine','ejs')
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b,
  }
}));

app.set('view engine','hbs')

app.set('views', path.join(__dirname, 'resources','views'));

//route init
route(app);

app.listen(port, () => console.log(`Web are listening at http://localhost: ${port}`));