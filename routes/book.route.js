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

// READ Books
router.route("/").get((req, res) => {
  bookSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET single Book
router.route("/get-book/:id").get((req, res) => {
  const ID = req.params.id;
  bookSchema.findById(ID, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

module.exports = router;
