const express = require("express");
const app = express();

//midleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));


app.listen(3000);
console.log('server port on 3000');
