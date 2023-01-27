require("dotenv").config(); 
const express = require("express"); //require express
const app = express();
const port=8080;
const cors = require("cors"); //require cors
const booksRoutes = require("./routes/books");






app.use(express.urlencoded({ extended: true })); //Parst Daten aus req.body

app.use(express.json()); //Parst Json Daten aus req.body

app.use(cors()); //allow cors (Zugriff vom unabhängigen Client)

app.use("/", booksRoutes); //use booksRoutes")

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});