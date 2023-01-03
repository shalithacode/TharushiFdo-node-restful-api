const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'coneccted',
        items: [0,2,6]
    });
});

module.exports = app;
