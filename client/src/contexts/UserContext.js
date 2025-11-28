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
    loginHandler() {},
    logoutHandler() {},
    isAuthenticated: false
})

export default UserContext;