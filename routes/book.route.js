import express from "express";
import { deleteBook, getBook, getBooks, postBooks, putBook } from "../controllers/book.controller.js";

const router = express.Router()

router.get("/", getBooks)
router.get("/:id", getBook)
router.post("/", postBooks)
router.put("/:id", putBook)
router.delete("/:id", deleteBook)

export { router }