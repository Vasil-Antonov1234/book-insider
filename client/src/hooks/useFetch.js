import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3030/jsonstore";

export default function useFetch(url, initialState, callback) {
    const [data, setData] = useState(initialState);
    const [isPending, setIspending] = useState(true);

    useEffect(() => {
        const abordController = new AbortController();

        (async () => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, {signal: abordController.signal});
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