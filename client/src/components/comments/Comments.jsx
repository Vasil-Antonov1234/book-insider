import CreateComment from "./create-comment/CreateComment.jsx";
import CommentCard from "./comment-card/CommentCard.jsx";

export default function Comments() {
    return (
        <div className="bg-[#fff7ed] p-6 w-190 ml-140">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="flex flex-col space-y-4">
                    <CommentCard />
                    <CreateComment />
            </div>
        </div>
    );
}