import BookCard from "../book-card/BookCard.jsx";
import Footer from "../footer/Footer.jsx";
// import useFetch from "../../hooks/useFetch.js";
import useFetch1 from "../../hooks/useFetch1.js";

export default function Home() {
    // const { data, isPending } = (useFetch("/jsonstore/books", {}))
    const { data, isPending } = useFetch1("/data/books")

    const books = Object.values(data)
        .sort((a, b) => b._createdOn - a._createdOn)
        .slice(0, 3)

    return (
        <div>
            

            {books.length ? 
            <>
                    <div className="h-34 bg-gradient-to-r via-gray-500 mt-4 flex items-center justify-center">
                        <h1 className="font-bold text-6xl tracking-tight font-serif text-white">{isPending ? "Loading..." : "All your favorite books here"}</h1>
                    </div>
                    <section className="flex items-center justify-center space-x-34">
                        {books.map((book) => <BookCard key={book._id} book={book} />)}
                    </section> 
            </> :
                    <section className="flex items-center justify-center space-x-34 mt-91 mb-59">
                        <h1 className="font-bold text-6xl tracking-tight font-serif text-black">There are no books yet</h1>
                    </section>
            }


            <Footer />

        </div>
    );
}