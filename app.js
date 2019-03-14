const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// enable bodyParser to get params from GET/POST requests
// example: https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', (req, res)=>  {
    res.sendFile((path.join(__dirname+ '/public/views/index.html')));
});

app.get('/login', (req,res) => {
    res.sendFile((path.join(__dirname+ '/public/views/login.html')));
});


app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server started on port: ' + PORT));