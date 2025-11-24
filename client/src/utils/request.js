import handleNewBookData from "./handleNewBookData.js";

const BASE_URL = "http://localhost:3030/jsonstore";

export default async function request(url, method = "GET", data) {

    const options = { method: method }

    if (data) {
        const body = handleNewBookData(data);

        options.headers = { "content-type": "application/json" };
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);

    const result = await response.json();

    return result
}