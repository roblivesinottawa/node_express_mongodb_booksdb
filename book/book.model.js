// define the schema for the books databse

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: String,
    publisher: String,
    year: Number,
});

const bookModel = mongoose.model('book', bookSchema, 'book')
module.exports = bookModel