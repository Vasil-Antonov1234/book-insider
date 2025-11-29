import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";

const BASE_URL = "http://localhost:3030";

export default function useFetch1(url) {
    const { user, isAuthenticated } = useContext(UserContext);
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {

        if (url) {
            const abordController = new AbortController();

            (async () => {
                // const books = await request(url);
                const response = await fetch(`${BASE_URL}${url}`, { signal: abordController.signal });
                const result = await response.json()
                setData(result);
                setIsPending(false)
            })()

            return () => {
                abordController.abort();
            }
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

        const response = await fetch(`${BASE_URL}${url}`, options);

        console.log(response)


        if (!response.ok || response.status === 204) {
            return {};
        }

        const result = await response.json();

        console.log(result)

        setData(result);

        return result;
    }

    return { data, isPending, request }
}