'use strict';
var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema ({
  user_id: String,
	name: String,
	type: String,
	duration: Number,
	description: String,
	minutes: Number,
	seconds: Number
});

module.exports = mongoose.model('Workout', workoutSchema);
