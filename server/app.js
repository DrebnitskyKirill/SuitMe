require("dotenv").config();
const express = require("express");
const config = require("./config");
const regRouter = require("./routes/reg.routes");
const adminRoutes = require("./routes/admin/admin.routes");
const searchRoutes = require("./routes/admin/search.routes");
const editRouter = require("./routes/admin/admin.editCard.routes");

const app = express();
const PORT = process.env.PORT || 4000;

config(app);
app.use("/", regRouter);
app.use("/createProduct", adminRoutes);
app.use("/searchProduct", searchRoutes);
app.use("/editProduct", editRouter);

app.listen(PORT, () => console.log(`*** Server Start ${PORT} port ***`));
