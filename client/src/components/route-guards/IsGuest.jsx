import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { Navigate } from "react-router";

export default function IsGuest() {
    const {isAuthenticated} = useContext(UserContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

}