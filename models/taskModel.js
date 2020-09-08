'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the task'
    },
    description: {
        type: String
    },
    creator: {
        type: String,
        required: 'Enter the creator'
    },
    duration: {
        type: Date,
        required: 'Enter the duration'
    },
    Created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);