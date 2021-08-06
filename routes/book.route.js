const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

// Book Model
const bookSchema = require("../models/Book");

// CREATE BOOK
router.route("/create-book").post((req, res, next) => {
  bookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;
