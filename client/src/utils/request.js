const BASE_URL = "http://localhost:3030/jsonstore";

export default async function request(url, method = "GET", headers, body) {

    const response = await fetch(`${BASE_URL}${url}`);
    const result = await response.json();

    return result
}