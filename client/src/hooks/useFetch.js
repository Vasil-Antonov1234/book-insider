import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/jsonstore";

export default function useFetch(url, initialState, callback) {
    const [data, setData] = useState(initialState);
    const [isPending, setIspending] = useState(true);

    useEffect(() => {

        (async () => {
            const response = await fetch(`${BASE_URL}${url}`);

            const result = await response.json();

            setIspending(false);

            if (callback) {
                setData(callback(result, result.firstPublished));
            } else {
                setData(result)
            }

        })()

    }, [url, callback])


    return { data, isPending };
}