var express = require('express')
var app = express()
var path = require('path')

// for fat vegan testing:
// app.use(express.static('/xampp/htdocs/fatvegan/src'))

app.use(express.static(__dirname))

app.listen(3000);
console.log("Node server listening on port 3000...")
console.log(__dirname)
