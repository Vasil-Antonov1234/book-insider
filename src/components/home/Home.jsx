import BookCard from "../book-card/BookCard.jsx";
import Footer from "../footer/Footer.jsx";
import useFetch from "../../hooks/useFetch.js";
import SpinnerBig from "../spinner/SpinnerBig.jsx";

export default function Home() {
    const { data: books, isPending } = useFetch("/data/books?sortBy=_createdOn%20desc&pageSize=3", [])

    return (
        <div>
            {isPending ?
                <div className="h-30 bg-gradient-to-r via-gray-500 mt-4 flex items-center justify-center">
                    <h1 className="font-bold text-6xl tracking-tight font-heading text-white">Loading...</h1>
                </div>
                :
                <div>
                    {books.length ?
                        <>
                            <div className="h-30 bg-gradient-to-r via-gray-500 mt-4 flex items-center justify-center">
                                <h1 className="font-bold text-6xl tracking-tight font-heading text-white">All your favorite books here</h1>
                            </div>
                            <h1 className="flex items-center justify-center font-bold text-4xl tracking-tight font-heading text-black mt-4">Latest</h1>
                            <section className="flex items-center justify-center space-x-34">
                                {books.map((book) => <BookCard key={book._id} book={book} />)}
                            </section>
                        </> :
                        <section className="flex items-center justify-center space-x-34 h-screen">
                            <h1 className="font-bold text-6xl tracking-tight text-black">There are no books yet</h1>
                        </section>
                    }

                </div>
            }
        </div>

    );
}