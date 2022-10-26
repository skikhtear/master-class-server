const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Master class api running')
});
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourses = courses.find(c => c.id === id)
    res.send(selectedCourses)
});
app.listen(port, () => {
    console.log('master class Server running on port:', port);
});