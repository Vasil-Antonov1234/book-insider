import request from "../../utils/request.js";
import handleNewBookData from "../../utils/handleNewBookData.js";
import { useNavigate, useParams } from "react-router";
import useForm from "../../hooks/useForm.js";

const initialValues = {
    title: "",
    author: "",
    imageUrl: "",
    genre: "",
    firstPublished: "",
    summary: "",
    rating: 0
}

export default function CreateEdit() {
    const bookId = useParams().bookId;
    const { data: values, changeHandler, formHandler } = useForm(initialValues, createBookHandler, bookId)

    const navigate = useNavigate();

    async function createBookHandler(values, bookId) {
        const body = handleNewBookData(values);

        if (bookId) {
            try {
                await request(`/books/${bookId}`, "PATCH", body);
                navigate(`/catalog/${bookId}/details`)
            } catch (error) {
                alert(error.message)
            }
        } else {
            try {
                await request("/books", "POST", body);
                navigate("/catalog")
            } catch (error) {
                alert(error.message)
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-[black] mb-6 flex items-center justify-center font-serif text-5xl">{bookId ? "Edit Book" : "Create Book"}</h1>

            <form action={formHandler} className="grid grid-cols-1 gap-6">
                {/* Title */}
                <div className="p-2">
                    <input 
                        onChange={changeHandler} 
                        value={values.title} 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Title" 
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-white" 
                    />
                </div>


                {/* Author */}
                <div className="p-2">
                    <input onChange={changeHandler} value={values.author} type="text" id="author" name="author" placeholder="Author" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-white" />
                </div>

                {/* Image Url */}
                <div className="p-2">
                    <input onChange={changeHandler} value={values.imageUrl} type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-white" />
                </div>

                <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Genre */}
                    <div>
                        <input onChange={changeHandler} value={values.genre} type="text" id="genre" name="genre" placeholder="Genre" className="block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-white" />
                    </div>

                    {/* First published */}
                    <div className="flex items-center bg-white rounded-md p-2 h-10">
                        <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"></path>
                            </svg>
                            <span className="ml-2">First Published</span>
                        </span>
                        <input onChange={changeHandler} value={values.firstPublished} type="date" id="first-published" name="firstPublished" className="block w-full h-7 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 background-color: #f6f6f6;" />
                    </div>
                </div>

                <div className="p-2">
                    {/* Summary */}
                    <div>
                        <textarea onChange={changeHandler} value={values.summary} id="summary" name="summary" rows="3" placeholder="Summary" className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-white"></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-full mt-6 p-2">
                    <button className="block w-full bg-[#ccac68] hover:bg-[#db9e1a] text-white text-2xl font-bold py-2 px-4 rounded-lg">
                        {bookId ? "Edit" : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
}