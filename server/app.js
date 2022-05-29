const express = require('express');
const config = require('./config');
const regRouter = require('./routes/reg.routes')
const logRouter = require('./routes/login.routes')
const logoutRouter = require('./routes/logout.routes')


const app = express();
const PORT = process.env.PORT || 4000;

config(app);
app.use('/', regRouter);
app.use('/', logRouter);
app.use('/', logoutRouter);


app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
