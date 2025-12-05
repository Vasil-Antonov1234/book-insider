import { createContext } from "react";

const BookContext = createContext({
    bookId: "",
    book: null
})

export default BookContext;