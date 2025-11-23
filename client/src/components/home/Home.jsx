import { useEffect, useState } from "react";
import BookCard from "../book-card/BookCard.jsx";
import Footer from "../footer/Footer.jsx";
import request from "../../utils/request.js";

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        
       (async () => {

        const allBooks = Object.values(await request("/books"));

        const sortedBooks = allBooks.sort((a, b) => b._createdOn - a._createdOn).slice(0, 3);
        setBooks(sortedBooks);

       })()

    }, [])

    return (
        <div >
            <div className="h-34 bg-gradient-to-r via-gray-500 mt-4 flex items-center justify-center">
                <h1 className="font-bold text-6xl tracking-tight font-serif text-white">All your favorite books here</h1>
            </div>
            <section className="flex items-center justify-center space-x-34">
                {books.map((book) => <BookCard key={book._id} book={book} />)}
            </section>

            <Footer />

        </div>
    );
}