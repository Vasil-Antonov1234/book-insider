import CreateComment from "./create-comment/CreateComment.jsx";
import CommentCard from "./comment-card/CommentCard.jsx";
import { useContext, useEffect, useReducer } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import useFetch from "../../hooks/useFetch.js";
import BookContext from "../../contexts/BookContext.jsx";
import RateCard from "../rate-card/RateCard.jsx";
import { commentReducer } from "../../reducers/commentsReduce.js";

export default function Comments({
    isOwner,
    onRefresh
}) {
    const { isAuthenticated, user } = useContext(UserContext);
    const { bookId, book } = useContext(BookContext);

    let isRated = false;
    
    if (book.isRated) {
        isRated = Object.keys(book.isRated)?.includes(user?._id)
    }

    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load: `creaqtor=_ownerId:users`
    });

    const { request } = useFetch();
    const [comments, dispatch] = useReducer(commentReducer, []);

    useEffect(() => {

        (async () => {
            const result = await request(`/data/comments?${query.toString()}`)
            dispatch({
                type: "GET_ALL",
                payload: result
            })
        })()

    }, [])

    return (
        <div className="bg-[#fff7ed] p-6 w-190 ml-140">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="flex flex-col space-y-4">
                {comments.length ? comments.map((comment) => <CommentCard key={comment._id} comment={comment} />) : <p>No comments yet.</p>}


                {isAuthenticated && !isOwner ? <CreateComment onPost={dispatch} /> : ""}
            </div>

            {isAuthenticated && !isOwner && !isRated ? <RateCard onRefresh={onRefresh} /> : ""}

        </div>
    );
}