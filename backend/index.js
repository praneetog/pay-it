const express = require("express");
const cors = require("cors");

const rootRouter = require("./routes/index");
const userRouter = require("./routes/index");
const accountRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("api/v1", rootRouter);
app.use("api/v1/user", userRouter);
app.use("api/v1/account", accountRouter);

app.listen(3000);