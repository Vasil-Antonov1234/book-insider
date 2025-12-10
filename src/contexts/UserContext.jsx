import { createContext } from "react";
import useFetch from "../hooks/useFetch.js";
import { useNavigate } from "react-router";
import usePersistedState from "../hooks/usePersistedState.js";
import { toast } from "react-toastify";

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
    editProfileHandler() { },
    isAuthenticated: false
})

export function UserProvider({
    children
}) {
    const [user, setUser] = usePersistedState(null, "auth");
    const { request } = useFetch()

    const navigate = useNavigate();

    async function registerHandler(userData) {

        try {
            const result = await request("/users/register", "POST", userData);

            setUser(result);

            navigate("/");
        } catch (error) {
            toast.error(error);
        };
    };

    async function loginHandler(userData) {

        try {
            const result = await request("/users/login", "POST", userData);

            setUser(result);

            navigate("/")
        } catch (error) {
            toast.error(error)
        }
    }

    async function logoutHandler() {

        try {
            await request("/users/logout", "GET", null, { accessToken: user?.accessToken })
        } catch (error) {

            if (error === "Invalid access token") {
                return
            }

            toast.error(error)
        } finally {
            setUser(null);
        }
    };

    async function editProfileHandler(imageUrl, avatar) {

        if (avatar[0]) {

            try {
                await request(`/data/avatars/${avatar[0]._id}`, "PATCH", {imageUrl: imageUrl}, { accessToken: user?.accessToken })

                navigate("/user/profile")

            } catch (error) {
                toast.error(error);
            }

        } else {
            try {
                await request(`/data/avatars/`, "POST", {imageUrl: imageUrl}, { accessToken: user?.accessToken });

                navigate("/user/profile");
            } catch (error) {
                toast.error(error);
            };
        }


    }

    const userContextValues = {
        user,
        registerHandler,
        loginHandler,
        logoutHandler,
        editProfileHandler,
        isAuthenticated: !!user
    }

    return (
        <UserContext.Provider value={userContextValues} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;