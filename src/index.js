const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");
const configHandlebars = require("./config/configHandlebars");
const configExpress = require("./config/configExpress");

const app = express();
const port = 3001;

configHandlebars(app);
configExpress(app);

app.use(router);

mongoose
  .connect(`mongodb://localhost:27017/magic-movies`)
  .then(() => {
    console.log("DB connected!");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  })
  .catch((err) => console.log("Cannot connect to DB"));
