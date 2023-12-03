const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGOURI } = require('./.keys');

mongoose.connect(MONGOURI);

mongoose.connection.on('connected', () => {
    console.log("connected to mongodb");
});

mongoose.connection.on('error', (err) => {
    console.log("error connecting mongodb", err);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});