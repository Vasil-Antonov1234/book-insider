import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030";

export default function useFetch(url, initialState, method = "GET", body, callback) {
    const [data, setData] = useState(initialState);
    const [isPending, setIspending] = useState(true);
    const options = { method: method };

    if (body) {
        options.headers = { "content-type": "application/json" };
        options.body = JSON.stringify(body);
    }


    useEffect(() => {
        const abordController = new AbortController();

        (async () => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, options, { signal: abordController.signal });
                const result = await response.json();

                if (callback) {
                    setData(callback(result, result.firstPublished));
                } else {
                    setData(result)
                }

            } catch (error) {

                if (error.name !== "AbortError") {
                    alert(error.message)
                }

            } finally {
                setIspending(false);
            }
        })()

        return () => {
            abordController.abort();
        }

    }, [url, callback])


    return { data, isPending };
}