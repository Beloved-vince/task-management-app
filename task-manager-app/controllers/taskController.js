// controllers/taskController.js
const Task = require('../models/Task');

let tasks = []; // In-memory store for simplicity

// Display list of tasks
exports.task_list = (req, res) => {
  res.render('index', { tasks });
};

// Display form to create new task
exports.task_create_get = (req, res) => {
  res.render('newTask');
};

// Handle create task form submission
exports.task_create_post = (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task(tasks.length + 1, title, description);
  tasks.push(newTask);
  res.redirect('/');
};

// Handle delete task
exports.task_delete = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.redirect('/');
};
