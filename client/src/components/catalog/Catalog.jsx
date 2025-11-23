import { useEffect, useState } from "react";
import request from "../../utils/request.js";
import BookCard from "../book-card/BookCard.jsx";

export default function Catalog() {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        (async () => {
            
            const allBooks = Object.values(await request("/books"));
            setBooks(allBooks);
 
        })()

    }, [])

    return (
        <div className="h-180 bg-gradient-to-r via-gray-500 mt-14 flex items-center justify-center">
            {books.map((book) => <BookCard key={book._id} book={book} />)}
        </div>
    );
}