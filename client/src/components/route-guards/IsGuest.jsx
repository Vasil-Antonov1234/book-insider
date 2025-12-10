import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { Navigate, Outlet } from "react-router";

export default function IsGuest() {
    const {isAuthenticated} = useContext(UserContext);

    // console.log(isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />

}