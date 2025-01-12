const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user-route");
const userLogger = require("./middleware/user-logger")

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRouter);
app.use(userLogger);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}/api/users`);
});