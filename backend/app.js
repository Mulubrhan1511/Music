const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGOURI } = require('./.keys');

require('./models/song')

mongoose.connect(MONGOURI);

mongoose.connection.on('connected', () => {
    console.log("connected to mongodb");
});

mongoose.connection.on('error', (err) => {
    console.log("error connecting mongodb", err);
});

require('./models/song')

app.use(express.json())
app.use(require('./routes/song'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});