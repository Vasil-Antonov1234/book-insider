import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import useFetch from "../../hooks/useFetch.js";
import UserProfileCard from "../user-profile-card/UserProfileCard.jsx";
import { dateHandler } from "../../utils/handleNewBookData.js";

export default function UserProfile() {
    const { user } = useContext(UserContext)
    const { data } = useFetch("/data/books", []);
    // const { data: myUser } = useFetch("/users/me", {});
    const books = Object.values(data);
    const myBooks = books.filter((book) => book._ownerId === user._id);
    const ratedBooks = books.filter((book) => Object.keys(book.isRated)?.includes(user._id));

    const query = new URLSearchParams({
        where: `_ownerId="${user._id}"`,
    });

    const {data: comments} = useFetch(`/data/comments?${query}`, []);
    const myComments = Object.values(comments);

    return (
        <section className="flex items-center justify-center">
            <div id="features" className="px-2 space-y-6 py-8 md:py-12 lg:py-24 mx-auto bg-[#fff7ed] w-290 h-170 overflow-y-auto">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">Profile</h2>
                    <p className="text-3xl">{user.email}</p>
                    <p className="italic">Created on {dateHandler(user._createdOn, true)}</p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                    <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">My books</h3>
                                <ul>
                                    {myBooks.map((book) => <UserProfileCard key={book._id} book={book}/>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">My comments</h3>
                                {myComments.map((comment) => <UserProfileCard key={comment._id} comment={comment}/>)}
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
                        <div className="flex flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">Rated books</h3>
                                <ul>
                                    {ratedBooks.map((ratedBook) => <UserProfileCard key={ratedBook._id} ratedBook={ratedBook}/>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}