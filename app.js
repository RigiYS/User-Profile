const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user-route");
const userLoger = require("./middleware/user-logger")
const userAuth = require("./middleware/user-auth")

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRouter);
app.use(userLoger);
app.use(userAuth);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}/api/users`);
});