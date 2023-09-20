const express = require('express');
const fetch = require('node-fetch');
const expressHandlebars = require('express-handlebars');
const helpers = require("./utils/helpers");
const routes = require('./controllers');
// merged for user routes and session
const path = require('path');
const session = require('express-session')
const sequelize = require('./connection/connection');

// const db = require('./connection/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT || 3000;

const expHbs = expressHandlebars.create({
  helpers,
});

const app = express();

app.engine('handlebars', expHbs.engine);
app.set('view engine', 'handlebars');

// creating user session
const userSession = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 60 * 60 * 2000,
        
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};
app.use(session(userSession))

// app.use for routes needs to be after session
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })
});