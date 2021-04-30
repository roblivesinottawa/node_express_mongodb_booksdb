// create the endpoints to add and  list comic books

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const BookService = require('./book')
const app = express();

const port = process.env.PORT || 3000

const uri = "";
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true} );

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/listBooks', async (req, res, next) => {
    try {
        const books = await BookService.listBooks()
        res.json(books)
    } catch (error) {
        next(error)
    }
})

app.get('/addBook', async (req, res, next) => {
    const title = req.query.title
    const publisher = req.query.publisher
    const year = req.query.year
    try {
        const books = await BookService.addBook(title, publisher, year)
        res.json(books)
    } catch (error) {
        next(error)
    }
})

app.listen(port, () => console.log(`Server starting on port ${port}`))