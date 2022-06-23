const express = require('express')
const file = require('./employees.json')

const app = express();
app.listen(3100);

function getEmployee (num) {
        return file[num]
} //allows us to get specific employees given a num

app.get("/",function(req, res) {
res.send(file) //client is asking us for something (req) and we send him something back (res)
})

app.get("/employee/:id",function(req, res) {
    res.send(getEmployee(req.params.id))
    }) //this give us a specific employee






