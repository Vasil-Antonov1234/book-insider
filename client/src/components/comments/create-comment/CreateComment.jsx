import { useContext } from "react";
import useForm from "../../../hooks/useForm.js"
import BookContext from "../../../contexts/BookContext.jsx";
import useFetch from "../../../hooks/useFetch.js";
import { useNavigate } from "react-router";
import UserContext from "../../../contexts/UserContext.jsx";
import { toast } from "react-toastify";

export default function CreateComment({
    onChange
}) {
    const initialValues = {
        comment: ""
    };

    const { bookId } = useContext(BookContext);
    const { logoutHandler } = useContext(UserContext);
    const { formImputRegister, formHandler } = useForm(initialValues, onSubmit);
    const { request } = useFetch()

    const navigate = useNavigate();

    async function onSubmit(data) {

        try {
            await request("/data/comments", "POST", { ...data, bookId });

            onChange();

        } catch (error) {

            if (error === "Invalid access token") {
                logoutHandler();
                navigate("/login")
                return toast.error(error);
            }

            toast.error(error);
        }
    };

    return (
        <form action={formHandler} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Add a comment</h3>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
                    Comment
                </label>
                <textarea
                    {...formImputRegister("comment")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="comment"
                    rows="3"
                    placeholder="Enter your comment">
                </textarea>
            </div>
            <button
                className="bg-[#ccac68] hover:bg-[#db9e1a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Post
            </button>
        </form>
    );
}