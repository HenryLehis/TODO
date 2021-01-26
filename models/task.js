const fs = require("fs");
const path = require("path");

const filepath = path.join(path.dirname(require.main.filename), "data", "tasks.json");

module.exports = class Task {
    constructor(task){
        this.description = task;
    }

    saveTask(){
        fs.readFile(filepath,(error, fileContent) => {
            let tasks = [];

            if(!error){
                tasks = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            tasks.push(this);
            fs.writeFile(filepath, JSON.stringify(tasks), (error) => {
                console.log(error);
        });

    });
}
static fetchTasks(callBack){
    fs.readFile(filepath, (error, fileContent) => {
        if(error){
            callBack([]);
        }
        callBack(JSON.parse(fileContent));
    });
}
static deleteTask(taskDescription) {
    fs.readFile(filepath, (error, fileContent) => {
        let tasks = [];
        if(!error){
            tasks = JSON.parse(fileContent);
        }

        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].description === taskDescription) {
                tasks.splice(i, 1);
                break;
            }
        }

        fs.writeFile(filepath, JSON.stringify(tasks),(error) => {
            console.log(error);
        });

    });
}
}

//{"description": "Task One"}