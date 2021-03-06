var express = require('express');
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

require('./routes/html-routes')(app);
require('./routes/mail-routes')(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
    console.log(`http://localhost:${PORT}`);
})