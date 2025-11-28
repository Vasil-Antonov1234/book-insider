import { createContext } from "react";

const UserContext = createContext({
    user: {
        email: "",
        password: "",
        _createdOn: 0,
        _id: "",
        accessToken: ""
    },
    registerHandler() {},
    logoutHandler() {},
    isAuthenticated: false
})

export default UserContext;