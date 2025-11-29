import { useContext } from "react";
import { Navigate } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";

export default function Logout() {
    const {logoutHandler} = useContext(UserContext)

    logoutHandler();

    return (
        <Navigate to={"/"}></Navigate>
    );
}