const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const route = require("./routes");
var cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.lor(err);
  });

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

route(app);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
