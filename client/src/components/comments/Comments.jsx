import CreateComment from "./create-comment/CreateComment.jsx";
import CommentCard from "./comment-card/CommentCard.jsx";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import useFetch from "../../hooks/useFetch.js";
import BookContext from "../../contexts/BookContext.jsx";
import RateCard from "../rate-card/RateCard.jsx";

export default function Comments({
    isOwner
}) {
    const { isAuthenticated } = useContext(UserContext);
    const { bookId } = useContext(BookContext);

    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load: `creaqtor=_ownerId:users`
    });

    // const { data } = useFetch(`/data/comments?${query.toString()}`, []);
    const [comments, setComments] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const { request } = useFetch()

    useEffect(() => {

        (async () => {
            const result = await request(`/data/comments?${query.toString()}`)
            setComments(result)
        })()

    }, [refresh])

    function onChange() {
        setRefresh(state => !state)
    }

    return (
        <div className="bg-[#fff7ed] p-6 w-190 ml-140">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="flex flex-col space-y-4">
                {comments.length ? comments.map((comment) => <CommentCard key={comment._id} comment={comment} />) : <p>No comments yet.</p>}


                {isAuthenticated && !isOwner ? <CreateComment comments={comments} onChange={onChange} /> : ""}
            </div>

            <RateCard />

        </div>
    );
}