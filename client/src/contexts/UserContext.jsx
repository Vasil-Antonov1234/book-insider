import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useNavigate } from "react-router";

const UserContext = createContext({
    user: {
        email: "",
        password: "",
        _createdOn: 0,
        _id: "",
        accessToken: ""
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
    isAuthenticated: false
})

export function UserProvider({
    children
}) {
    const [user, setUser] = useState(null);
    const { request } = useFetch()

    const navigate = useNavigate();

    async function registerHandler(userData) {

        try {
            const result = await request("/users/register", "POST", userData);

            setUser(result);

            navigate("/");
        } catch (error) {
            alert(error);
        };


    };

    async function loginHandler(userData) {

        try {
            const result = await request("/users/login", "POST", userData);

            setUser(result);

            navigate("/")
        } catch (error) {
            alert(error)
        }
    }

    async function logoutHandler() {

        try {
            await request("/users/logout", "GET", null, { accessToken: user.accessToken })
        } catch (error) {
            
            if (error === "Invalid access token") {
                return
            }
            
            alert(error)
        } finally {
            setUser(null);
        }
    };

    const userContextValues = {
        user,
        registerHandler,
        loginHandler,
        logoutHandler,
        isAuthenticated: !!user
    }

    return (
        <UserContext.Provider value={userContextValues} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;