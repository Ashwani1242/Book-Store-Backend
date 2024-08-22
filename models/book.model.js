import mongoose from "mongoose";
const BookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true]
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Book = mongoose.model("Book", BookSchema)
export { Book }