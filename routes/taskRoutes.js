'use strict';
module.exports = function(app) {
    var taskList = require('../controllers/taskController');

    app.route('/add')
        .post(taskList.create_a_task);


    app.route('/list')
        .get(taskList.list_all_tasks);
};