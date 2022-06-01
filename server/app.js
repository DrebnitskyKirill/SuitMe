require("dotenv").config();
const express = require("express");
const config = require("./config");
const logRouter = require("./routes/login.routes");
const logoutRouter = require("./routes/logout.routes");
const regRouter = require("./routes/reg.routes");
const adminRoutes = require("./routes/admin/admin.routes");
const searchRoutes = require("./routes/admin/search.routes");
const editRouter = require("./routes/admin/admin.editCard.routes");
const allProductsRouter = require('./routes/allProducts.routes')
const suitsRouter = require('./routes/suits.routes')
const orderRouter = require('./routes/order.routes')
const filterRouter = require("./routes/filtetDate.routes");

const app = express();
const PORT = process.env.PORT || 4000;

config(app);

app.use('/', logRouter);
app.use('/', logoutRouter)
app.use('/', regRouter);
app.use('/', suitsRouter)
app.use('/', allProductsRouter)
app.use('/', orderRouter);
app.use("/", filterRouter);
app.use('/createProduct', adminRoutes);
app.use('/searchProduct', searchRoutes);
app.use('/editProduct', editRouter);


app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
