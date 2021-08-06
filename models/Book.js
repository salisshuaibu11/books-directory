const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    authorEmail: {
      type: String,
      require: true,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookSchema);
