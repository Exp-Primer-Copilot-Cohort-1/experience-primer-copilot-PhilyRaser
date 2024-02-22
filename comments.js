// Create web server 123
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Create route to handle GET request
app.get('/comments', (req, res) => {
    res.send('You have sent a GET request');
});

// Create route to handle POST request
app.post('/comments', (req, res) => {
    res.send('You have sent a POST request');
});

// Create route to handle PUT request
app.put('/comments', (req, res) => {
    res.send('You have sent a PUT request');
});

// Create route to handle DELETE request
app.delete('/comments', (req, res) => {
    res.send('You have sent a DELETE request');
});

// Create route to handle PATCH request
app.patch('/comments', (req, res) => {
    res.send('You have sent a PATCH request');
});

// Create route to handle HEAD request
app.head('/comments', (req, res) => {
    res.send('You have sent a HEAD request');
});

// Create route to handle OPTIONS request
app.options('/comments', (req, res) => {
    res.send('You have sent a OPTIONS request');
});