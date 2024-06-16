// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const taskController = require('./controllers/taskController');

app.get('/', taskController.task_list);
app.get('/new', taskController.task_create_get);
app.post('/create', taskController.task_create_post);
app.post('/delete/:id', taskController.task_delete);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
