const express = require('express');
const app = express();

const PORT = 3000;

// routes
app.get('/', (req, res) => {

});

app.get('/api/v1/tasks', (req, res) => {

});

app.post('/api/v1/tasks', (req, res) => {

});

app.get('/api/v1/tasks/:id', (req, res) => {

});

app.patch('/api/v1/tasks/:id', (req, res) => {

});

app.delete('/api/v1/tasks/:id', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
