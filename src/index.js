const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

console.log('Listen ' + process.env.PORT)

app.listen(process.env.PORT);