import { useEffect, useState } from "react"
// import request from "../utils/request.js"
import handleNewBookData from "../utils/handleNewBookData.js"
import useFetch from "./useFetch.js"

export default function useForm(values, callback, bookId) {
    const { request } = useFetch()
    const [data, setData] = useState(values)

    function changeHandler(event) {
        setData(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    async function formHandler() {
        await callback(data, bookId)
    }

    function formImputRegister(name) {
        return {
            name,
            value: data[name],
            onChange: changeHandler
        }
    }

    useEffect(() => {

        if (bookId) {
            (async () => {                
                try {
                    const book = await request(`/data/books/${bookId}`);
                    const convertedBook = handleNewBookData(book, book.firstPublished);

                    setData(convertedBook);
                } catch (error) {
                    alert(error.message)
                }
            })()
        }

    }, [bookId])
    
    return { data, changeHandler, formHandler, formImputRegister }
}