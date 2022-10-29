const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mongoose = require("mongoose");
const config = require("config");
const dbConfig = config.get("dbuser.dbConfig.dbName");
const { json } = require("express");

const routes = require("./routes/hngRoute");



app.use(json());

app.use("/", routes);





mongoose
  .connect(dbConfig)
  .then(() => console.log(`Connection to the database is successful`))
  .catch((e) => console.log(e.message));

  
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
