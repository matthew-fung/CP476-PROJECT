var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const playRouter = require('./routes/play');
const homeRouter = require('./routes/home');
const logoutRouter = require('./routes/logout');
const resultRouter = require('./routes/result');
const mongoose = require('mongoose');

// enable bodyParser to get params from GET/POST requests
// example: https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters

// connect to mongodb
var mongoDB = "mongodb://herokubfud:cp47611@ds237955.mlab.com:37955/beforeyoudrive-io";
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;

// check connection works
db.once('open', function(){
    console.log('connected to mongodb')
});

// check no db errors
db.on('error', function(error){
    console.log(error);
});

// models
let user = require('./models/user-mongo');
let location = require('./models/location-mongo');
let result = require('./models/result-mongo');

// use sessions to keep track of the user
app.use(session({
  secret: 'beforeyoudrive',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use(cors()); // Use this after the variable declaration
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// define routes for each type of URL
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/play', playRouter);
app.use('/home', homeRouter);
app.use('/logout', logoutRouter);
app.use('/results', resultRouter);

app.set('view engine', 'ejs');
app.set('views', './public/views')
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server started on port: ' + PORT));