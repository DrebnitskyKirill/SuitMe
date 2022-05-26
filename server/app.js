const express = require('express');
const config = require('./config');


const app = express();
const PORT = process.env.PORT || 4000;

config(app);


app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
