const date = require('../getDate.js');
const Task = require("../models/task");

exports.getMainPage = (req, res)=> {
    Task.fetchTasks(tasks => {
        let today = {
        date: date.getDate(),
        weekday:  date.getWeekDay()
    };

    
    res.render('index.ejs', {date: today, toDoItems: tasks});
    });



    
};

exports.postnewTask = (req, res) => {
    let item = new Task(req.body.newTask);
    item.saveTask();
    res.redirect("/");
}

exports.deleteTask = (req, res) => {
    console.log("Call from delete", req.body.checkbox);
    Task.deleteTask(req.body.checkbox);
    res.redirect("/");
}