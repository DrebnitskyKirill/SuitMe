const express = require('express');
const config = require('./config');
const regRouter = require('./routes/reg.routes')


const app = express();
const PORT = process.env.PORT || 4000;

config(app);
app.use('/', regRouter)


app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
