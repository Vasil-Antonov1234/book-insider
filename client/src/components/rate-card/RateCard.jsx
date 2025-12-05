import { useContext } from "react";
import BookContext from "../../contexts/BookContext.jsx";
import { calcRatingHandler } from "../../utils/ratingHandler.js";
import useFetch from "../../hooks/useFetch.js";

export default function RateCard() {
    const { request } = useFetch()
    const { bookId, book } = useContext(BookContext)

    async function rateHandler(formData) {
        const rating = formData.get("rating");

        const totalRates = book.totalRates + 1;
        const totalRatingPoints = book.totalRatingPoints + Number(rating);

        const newRating = calcRatingHandler(totalRatingPoints, totalRates)

        const body = {
            rating: newRating,
            totalRates,
            totalRatingPoints
        }

        await request(`/data/books/${bookId}`, "PATCH", body, { isRate: true });
    };

    return (
        <form action={rateHandler}>
            <h2 className="text-3xl font-bold text-black text-center font-serif mt-3">
                Rate the book
            </h2>
            <div className="flex justify-center gap-2 text-3xl mt-1">
                <div className="flex flex-row-reverse justify-end items-center gap-2">
                    <input
                        id="rating-1"
                        type="radio"
                        className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                        name="rating"
                        defaultValue={5}
                    />
                    <label
                        htmlFor="rating-1"
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-400 dark:text-neutral-600"
                    >
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                {" "}
                            </path>
                        </svg>
                    </label>
                    <input
                        id="rating-2"
                        type="radio"
                        className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                        name="rating"
                        defaultValue={4}
                    />
                    <label
                        htmlFor="rating-2"
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-400 dark:text-neutral-600"
                    >
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                {" "}
                            </path>
                        </svg>
                    </label>
                    <input
                        id="rating-3"
                        type="radio"
                        className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                        name="rating"
                        defaultValue={3}
                    />
                    <label
                        htmlFor="rating-3"
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-400 dark:text-neutral-600"
                    >
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                {" "}
                            </path>
                        </svg>
                    </label>
                    <input
                        id="rating-4"
                        type="radio"
                        className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                        name="rating"
                        defaultValue={2}
                    />
                    <label
                        htmlFor="rating-4"
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-400 dark:text-neutral-600"
                    >
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                {" "}
                            </path>
                        </svg>
                    </label>
                    <input
                        id="rating-5"
                        type="radio"
                        className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                        name="rating"
                        defaultValue={1}
                    />
                    <label
                        htmlFor="rating-5"
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-400 dark:text-neutral-600"
                    >
                        <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                {" "}
                            </path>
                        </svg>
                    </label>
                </div>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-[#ccac68] hover:bg-[#db9e1a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
                >
                    Rate
                </button>
            </div>
        </form>

    );
}