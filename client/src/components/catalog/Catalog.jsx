import BookCard from "../book-card/BookCard.jsx";
import useFetch from "../../hooks/useFetch.js";
import Search from "../search/Search.jsx";

export default function Catalog() {
    const { data, request, setData, isPending } = useFetch("/data/books", []);
    const books = Object.values(data);

    async function SubmutHandler(formData) {
        const data = Object.fromEntries(formData);

        // let query = `/data/books?where=title LIKE "${data.title}" AND author LIKE "${data.author}"${data.genre? ` AND genre%3D%22${data.genre}%22` : ""}`;
        let query = `/data/books?where=title LIKE "${data.title}" AND author LIKE "${data.author}" AND genre LIKE "${data.genre}"`;

        const searchData = await request(query);

        setData(searchData);    
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <h1 className="flex items-center justify-center font-bold text-6xl tracking-tight font-serif text-black mt-2">Collection</h1>
                <Search onSearch={SubmutHandler}/>

            </div>

            <div className="h-180 bg-gradient-to-r via-gray-500 mt-3 overflow-y-auto">
                {isPending ? <h1 className="flex items-center justify-center font-bold text-5xl tracking-tight font-serif text-white">Loading...</h1> :

                    <div className="flex items-center justify-center grid grid-cols-4 gap-4 p-4">
                        {books.map((book) => <BookCard key={book._id} book={book} />)}
                    </div>
                }
            </div>
        </>

    );
}