const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://67.11.99.167/32/book-searchMERN",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
module.exports = mongoose.connection;
