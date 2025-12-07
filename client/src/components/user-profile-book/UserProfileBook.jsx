import { Link } from "react-router";
import useFetch from "../../hooks/useFetch.js";
import { dateHandler } from "../../utils/handleNewBookData.js";

export default function UserProfileBook(props) {
    const { data: book } = useFetch(`/data/books/${props?.comment?.bookId}`, {});

    if (props.book) {
        return (
            <li className="mt-3">
                <Link className="hover:underline font-bold" to={`/catalog/${props.book._id}/details`}>{props.book.title}</Link>
            </li>
        );
    };

    if (props.comment) {

        return (
            <li className="mt-3">
                <Link className="hover:underline font-bold" to={`/catalog/${book._id}/details`}>{book.title}</Link>
                <div>
                    <p>{props.comment.comment}</p>
                    <p className="text-sm text-muted-foreground italic"> Posted on {dateHandler(props.comment._createdOn, true)}</p>
                </div>
            </li>
        )
    }

    if (props.ratedBook) {
        return (
            <li className="mt-3">
                <Link className="hover:underline font-bold" to={`/catalog/${props.ratedBook._id}/details`}>{props.ratedBook.title}</Link>
            </li>
        )
    }
}