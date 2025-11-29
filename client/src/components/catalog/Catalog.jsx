import BookCard from "../book-card/BookCard.jsx";
// import useFetch from "../../hooks/useFetch.js";
import useFetch1 from "../../hooks/useFetch1.js";

export default function Catalog() {
    const {data, isPending} = useFetch1("/data/books");
    // const { data, isPending } = useFetch("/jsonstore/books", {});
    const books = Object.values(data);
    console.log(books)

    return (
        <div className="h-180 bg-gradient-to-r via-gray-500 mt-14 overflow-y-auto">
            {isPending ? <h1 className="flex items-center justify-center font-bold text-5xl tracking-tight font-serif text-white">Loading...</h1> :
                <div className="flex items-center justify-center grid grid-cols-4 gap-4 p-4">
                    {books.map((book) => <BookCard key={book._id} book={book} />)}
                </div>
            }
        </div>
    );
}