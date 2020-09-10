var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

mongoose.connect("mongodb://localhost/tasks")
//var taskList = ['one', 'two']

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

var taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    duration: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

var Task = mongoose.model('Task', taskSchema)

app.get("/", function(req, res) {
    Task.find({}, function(err, taskList) {
        if (err)
            console.log(err)
        else {
            res.render('index.ejs', {
                taskList: taskList
            })
        }
    })

})

app.post("/add", function(req, res) {
    console.log("task added")
    var newItem = new Task({
        name: req.body.item,
        description: req.body.desc,
        creator: req.body.crea,
        duration: req.body.dur,
        createdAt: req.body.tim
    })
    Task.create(newItem, function(err, Task) {
        if (err) console.log(err)
        else {
            console.log("inserted item:" + newItem)
        }
    })
    //taskList.push(item)
    res.redirect("/")
})

app.listen(3000, function() {
    console.log("listening on port 3000")
})