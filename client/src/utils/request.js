const BASE_URL = "http://localhost:3030/jsonstore";

export default async function request(url, method = "GET", body) {

    const options = { method: method }

    if (body) {
        // const body = handleNewBookData(data);

        options.headers = { "content-type": "application/json" };
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);

    const result = await response.json();

    return result
}