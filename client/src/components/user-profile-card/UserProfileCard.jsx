import { Link } from "react-router";
import useFetch from "../../hooks/useFetch.js";
import { dateHandler } from "../../utils/handleNewBookData.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function UserProfileCard(props) {
    const { data: book } = useFetch(`/data/books/${props?.comment?.bookId}`, {});
    const { user } = useContext(UserContext);

    if (props.book) {
        return (
            <li className="mt-3">
                <Link className="hover:underline font-bold" to={`/catalog/${props.book._id}/details`}>{props.book.title}</Link>
            </li>
        );
    };

    if (props.comment) {

        return (
            book.title ?
                <li className="mt-3">
                    <Link className="hover:underline font-bold" to={`/catalog/${book._id}/details`}>{book.title}</Link>
                    <div>
                        <p>{props.comment.comment}</p>
                        <p className="text-sm text-muted-foreground italic"> Posted on {dateHandler(props.comment._createdOn, true)}</p>
                    </div>
                </li> : ""  
        )
    }

    if (props.ratedBook) {
        return (
            <li className="mt-3">
                <Link className="hover:underline font-bold" to={`/catalog/${props.ratedBook._id}/details`}>{props.ratedBook.title}</Link>
                <p className="text-sm text-muted-foreground italic"> Rated with {props.ratedBook.isRated[user._id].rating} stars</p>
                <p className="text-sm text-muted-foreground italic"> On {dateHandler(props.ratedBook.isRated[user._id]._created_on, true)}</p>
            </li>
        )
    }
}