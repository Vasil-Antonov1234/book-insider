// import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useFetch1 from "../../hooks/useFetch1.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Details() {
    // const [book, setBook] = useState({});
    const { bookId } = useParams();
    const { request, data: book } = useFetch1(`/data/books/${bookId}`, {});
    const { user } = useContext(UserContext)
    const isOwner = book._ownerId === user?._id

    // useEffect(() => {

    //     (async () => {

    //         try {
    //             const book = await request(`/data/books/${bookId}`);

    //             setBook(book);
    //         } catch (error) {
    //             alert(error.message)
    //         }

    //     })()

    // }, [bookId])

    const navigate = useNavigate();

    async function deleteBookHandler() {
        const isConfirm = confirm(`Are you sure you want to delete ${book.title} from the collection?`);

        if (isConfirm) {

            try {
                await request(`/data/books/${book._id}`, "DELETE");

                navigate("/catalog");
            } catch (error) {
                alert(error.message);
            };
        };
    }

    return (
        <section className="bg-[url('/images/details.jpg')] bg-cover bg-center flex items-center justify-center min-h-screen">
            <div className="flex gap-6 items-center bg-[#e6c683] p-4 border border-default rounded-base shadow-xs md:flex-row w-290 h-190 md:flex-row">
                <img className="w-164 h-180 object-cover" src={book.imageUrl} alt={book.title} />
                <div className="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-heading">{book.title}</h5>
                    <p className="text-2xl">{book.author}</p>
                    <p className="font-bold">{book.genre}</p>
                    <p className="mb-6 text-body">{book.summary}</p>
                    <p className="mb-6 text-body text-2xl">
                        <span className="font-bold">First published: </span>
                        {book.firstPublished}
                    </p>
                    <p className="mb-6 text-body">
                        <span className="font-bold">Rating: </span>
                        {book.rating}
                    </p>
                    <div className="mt-auto flex gap-2">
                        {isOwner ? <>
                            <Link to={`/catalog/${book._id}/edit`} className="block w-full bg-[#ccac68] hover:bg-[#db9e1a] text-white text-2xl font-bold py-2 px-4 rounded-lg">
                                Edit
                            </Link>
                            <button onClick={deleteBookHandler} className="block w-full bg-[#ccac68] hover:bg-[red] text-white text-2xl font-bold py-2 px-4 rounded-lg">
                                Delete
                            </button>
                        </> : ""}
                    </div>
                </div>
            </div>
        </section>
    );
}