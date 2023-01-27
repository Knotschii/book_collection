const pool = require('../db');

const getAllBooks = async (req, res) => {
    try {
        const {rows: books} = await pool.query("SELECT * FROM books");
        res.status(200).json(books);
    } catch (err) {
        console.log(err);
            res.status(404).send(`No books found.. ${err.message}`);
        };
    }


const createBook = async (req, res) => {
    try {
        console.log(req.body);
        const {
            rows: [newBook],
        } = await pool.query(
            "INSERT INTO books (id, title, descriptopn, cover) VALUES ($1, $2, $3, $4) RETURNING *",
            [id, title, descriptopn, cover]
        );
        console.log(newBook);
        res.status(202).json(newBook);
    } catch (err) {
        console.log(err);
        res.status(404).send(`No books found.. ${err.message}`);
        }
    };

    const getSingleBook = async (req, res) => {
        try {
            const { id } = req.params;
            const { rows: [singleBook], 
            } = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
            console.log(singleBook);
            res.status(200).json(singleBook);
        } catch (err) {
            console.log(err);
            res.status(404, 'undefined').send(`No books found.. ${err.message}`); //ohne eintrag trotzdem kein error
        }
    };  

    const updateBook = async (req, res) => {
        try {
            const { id } = req.params;
            const { title, descriptopn, cover } = req.body;
            const { 
                rows: [updateBook],
            }= await pool.query(
                "UPDATE books SET title = $1, descriptopn = $2, cover = $3 WHERE id = $4 RETURNING *",
                [title, descriptopn, cover, id]
            );
            console.log(updateBook);
            res
            .status(201)
            .send(`Book with the title ${updateBook.title} has been updated`);
        } catch (err) {
            console.log(err);
            res.status(404).send(`No books found.. ${err.message}`);
          
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { rows: [deleteBook], } = await pool.query(
            "DELETE FROM books WHERE id = $1 RETURNING *",
            [id]
        );
        console.log(deleteBook);
        res
        .status(200)
        .send(`Book with the title ${deleteBook.title} has been deleted`);
    } catch (err) {
        console.log(err);
        res.status(404).send(`No books found.. ${err.message}`);
    }
};

module.exports = {
    getAllBooks,
    createBook,
    getSingleBook,
    updateBook,
    deleteBook,
};