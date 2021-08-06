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

// UODATE a book
router.route("/update-book/:id").put((req, res, next) => {
  const ID = req.params.id;
  bookSchema.findByIdAndUpdate(ID, {
    $set: req.body,
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("Book updated successfully")
    }
  });
});

module.exports = router;
