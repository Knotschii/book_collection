const express = require("express");
const router = express.Router();
const {
    getAllBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook,
} = require("../controllers/books");

router.route("/books").get(getAllBooks).post(createBook);

router.route("/books/:id").get(getSingleBook).put(updateBook).delete(deleteBook);

module.exports = router;