const express = require('express')
const app = express();

app.get('/',function(req,res) {
    res.send('Hello Word')
})

app.listen('1010')