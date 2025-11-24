import { Link } from "react-router";

export default function BookCard({
    book
}) {

    let summary = book.summary.split(". ")[0];
    summary = summary + "...";
    
    return (
        <div className="group relative h-118 w-94 [perspective:1000px] mt-8">
            <div
                className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]"
            >
                <div
                    className="absolute w-full h-full rounded-xl bg-transparent-to-br from-gray-300 to-gray-800 p-6 text-white [backface-visibility:hidden]"
                >
                    <img src={book.imageUrl} alt={book.title} className="w-full h-full object-fit rounded" />
                    <p className="px-4 py-2 bg-black opacity-70 text-black-900 mt-1 rounded-lg font-semibold transition-colors">Rating: {book.rating}</p>
                </div>

                <div
                    className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 p-6 text-white [transform:rotatey(-180deg)] [backface-visibility:hidden]"
                >
                    <div className="flex flex-col h-full">
                        <h3 className="text-2xl font-bold mb-4">{book.title}</h3>
                        <p className="text-2xl">{book.author}</p>
                        <div className="flex-grow">
                            <p className="text-lg">{summary}</p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <Link
                                to={`/catalog/${book._id}/details`} className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-[#312d3b] hover:text-white transition-colors"
                            >See more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}