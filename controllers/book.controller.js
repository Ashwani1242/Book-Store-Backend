import { Book } from "../models/book.model.js";

const postBooks = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(200).json(book)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        res.status(200).json(book)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const putBook = async (req, res) => {
    try {

        const { id } = req.params
        const book = await Book.findByIdAndUpdate(id, req.body)

        if (!book) {
            return res.status(404).json({ message: "Book not Found" })
        }

        const updatedBook = await Book.findById(id)
        res.status(200).json(updatedBook)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndDelete(id)

        if (!book) {
            return res.status(404).json({ message: "Book not Found" })
        }

        const books = await Book.find({})

        res.status(200).json({
            status: "Book Deleted Successfully",
            count: books.length,
            data: books
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export { postBooks, getBook, getBooks, putBook, deleteBook }