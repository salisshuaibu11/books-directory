require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConfig = require("./database/db");
const app = express();

// PORT
const PORT = process.env.PORT || 500;

// Express Route
const BOOK_ROUTE = require("./routes/book.route");

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(
    () => {
      console.log("Database successfully connected!");
    },
    (error) => {
      console.log(`Could not connect to database: ${error}`);
    }
  );

app.use(express.json());
app.use(cors());
app.use("/api", BOOK_ROUTE);

app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});

// 404 Error
app.use((req, res, next) => {
  console.log("404");
  next();
});

app.use((err, req, res, next) => {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
