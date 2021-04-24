// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const session = require('express-session');

const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// letting the application know where the static files are (public/css/jss)
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// configure and link a session object with the sequelize store

const sess = {
  secret:'Does it Matter',
  cookie: {},
  resave: false,
  saveUnintialized: true, 
  store: new SequelizeStore({
    db: sequelize
  })
};

// add express-session and store as Express.js middleware
app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
