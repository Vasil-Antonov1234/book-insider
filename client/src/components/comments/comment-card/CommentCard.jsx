import { dateHandler } from "../../../utils/handleNewBookData.js";

export default function CommentCard({
    comment
}) {
    const date = dateHandler(comment._createdOn, {convert: "timestamp"});
    
    // const date = new Date(comment._createdOn);

    // const convertedDate = `0${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`

    // console.log(typeof(convertedDate))
    // console.log(convertedDate.length)

    // const a = dateHandler(convertedDate)

    // console.log(a)

    

    return (
        <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{comment.creaqtor.email}</h3>
            <p className="text-gray-700">{comment.comment}
            <p className="text-gray-700 text-sm mb-2">Posted on {date}</p>
            </p>
        </div>
    );
}