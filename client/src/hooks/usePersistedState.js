import { useState } from "react";

export default function usePersistedState(initialState, key) {
    const [user, setUser] = useState(() => {

        if (localStorage.getItem("auth")) {
            const authUser = JSON.parse(localStorage.getItem("auth"));

            return authUser;
        }

        return initialState;
    });

    function setPersistedState(value) {
        localStorage.setItem(key, JSON.stringify(value))
        setUser(value)
    }

    return [
        user,
        setPersistedState
    ]
}