import { useContext } from "react";
import UserContext from "../contexts/UserContext.jsx";

const BASE_URL = "http://localhost:3030";

export default function useFetch1() {
    const { user, isAuthenticated } = useContext(UserContext);

    async function request(url, method = "GET", body, config = {}) {
        const options = { method: method };

        if (body) {

            options.headers = { "content-type": "application/json" };
            options.body = JSON.stringify(body);

            // if (url === "/users/logout") {
            //     const accessToken = body.accessToken;
            //     options.headers = { "X-Authorization": accessToken };

            //     const response = await fetch(`${BASE_URL}${url}`, options);

            //     return response;
            // }

            // if (url !== "/users/logout") {
            //     options.headers = { "content-type": "application/json" };
            //     options.body = JSON.stringify(body);
            // }
        }

        if (config.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                "X-Authorization": config.accessToken || user.accessToken
            }
        }

        const response = await fetch(`${BASE_URL}${url}`, options);

        if (!response.ok || response.status === "204") {
            return {};
        }

        const result = await response.json();

        return result;
    }

    return { request }
}