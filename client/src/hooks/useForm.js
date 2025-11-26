import { useEffect, useState } from "react"
import request from "../utils/request.js"
import handleNewBookData from "../utils/handleNewBookData.js"

export default function useForm(values, bookId) {
    const [data, setData] = useState(values)   

    function changeHandler(event) {
        setData(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    useEffect(() => {

        if (bookId) {
            (async () => {
                try {
                    const book = await request(`/books/${bookId}`);
                    const convertedBook = handleNewBookData(book, book.firstPublished);

                    setData(convertedBook);
                } catch (error) {
                    alert(error.message)
                }
            })()
        } else {
            setData(values)
        }

    }, [bookId, values])
    
    return { data, changeHandler }
}