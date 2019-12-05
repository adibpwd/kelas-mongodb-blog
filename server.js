const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// konfigurasi body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// konfigurasi mongodb
mongoose.connect('mongodb://127.0.0.1:27017/kelas_blog', { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(11223, () => {
    console.log('run on port 11223')
})