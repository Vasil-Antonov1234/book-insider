import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";

const BASE_URL = "http://localhost:3030";

export default function useFetch(url, initialState) {
    const { user, isAuthenticated } = useContext(UserContext);
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState(initialState)

    useEffect(() => {

            if (!url) {
                return
            }

            const abordController = new AbortController();

            (async () => {

                try {
                    // const books = await request(url);
                    const response = await fetch(`${BASE_URL}${url}`, { signal: abordController.signal });

                    if (!response.ok || response.status === 204) {
                        setIsPending(false)
                        return {};
                    };

                    const result = await response.json()
                    
                    setData(result);
                    setIsPending(false)
                } catch (error) {
                    if (error.name !== "AbortError") {
                        alert(error.message)
                    }
                }
            })()

            return () => {
                abordController.abort();
            }

    }, [url])

    async function request(url, method = "GET", body, config = {}) {
        const options = { method: method };

        if (body) {

            options.headers = { "content-type": "application/json" };
            options.body = JSON.stringify(body);

        }

        if (config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                "X-Authorization": config.accessToken || user.accessToken
            }
        }

        try {
            const response = await fetch(`${BASE_URL}${url}`, options);

            if (!response.ok) {
                const result = await response.json();
                throw result;
            }

            if (response.status === 204) {
                return {};
            }

            const result = await response.json();

            setData(result);

            return result;
        } catch (error) {
           throw error.message
        }
    }

    return { data, isPending, request }
}