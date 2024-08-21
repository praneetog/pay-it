const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const rootRouter = require("./routes/index");
const userRouter = require("./routes/index");

const app = express();

app.use("api/v1", rootRouter);
app.use("api/v1/user", userRouter);

app.listen(3000);