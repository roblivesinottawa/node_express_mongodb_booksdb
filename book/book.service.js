const addBook = Book => (title, publisher, year) => {
    if(!title || !publisher || !year){
        throw new Error("Missing data. Please, provide values for title, publisher, and year.")
    }
    const book = new Book({ title, publisher, year })
    return book.save()
}

const listBooks = Book => () => Book.find({});

module.exports = Book => {
    return {addBook: addBook(Book), listBooks: listBooks(Book)}};