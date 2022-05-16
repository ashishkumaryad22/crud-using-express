const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config");
const { mongoose } = require("mongoose");
mongoose.Promise = global.Promise;
const port = 8888;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log("successfully connected to the database...");
  })
  .catch((err) => {
    console.log("could not Connect with DB.");
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node APIs...." });
});

require("./app/routes/bike.route.js")(app);
app.listen(port, () => {
  console.log("server is listening at port : " + port);
});
