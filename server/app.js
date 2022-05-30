const express = require('express');
const config = require('./config');
const regRouter = require('./routes/reg.routes')
const suitsRouter = require('./routes/suits.routes')
const allProductsRouter = require('./routes/allProducts.routes')

const app = express();
const PORT = process.env.PORT || 4000;

config(app);
app.use('/', regRouter)
app.use('/', suitsRouter)
app.use('/', allProductsRouter)


app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
