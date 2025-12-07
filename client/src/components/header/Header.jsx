import { useContext } from "react";
import { Link, NavLink } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";
import styles from "./Header.module.css"

export default function Header() {
    const { isAuthenticated, user } = useContext(UserContext)

    return (
        <nav>
            <div className="bg-gray-600 text-white py-3 px-4 flex items-center justify-between">
                <Link className="font-bold text-xl tracking-tight" to="/">Book Insider</Link>
                <div className="flex items-center">
                    <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to="/catalog">Catalog</NavLink>
                    {isAuthenticated ?
                        <>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to="/create">Create Book</NavLink>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to={"/logout"}>Logout</NavLink>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to="/user/profile">Profile</NavLink>
                        </> :
                        <>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to="/register">Register</NavLink>
                            <NavLink className={({ isActive }) => isActive ? styles["selected"] : "text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"} to="/login">Login</NavLink>
                        </>
                    }
                </div>
            </div>
            <div className="flex justify-end">
                {isAuthenticated && <span className="text-sm px-4 py-2 leading-none rounded-full font-bold">Welcome {user.email}</span>}
            </div>
        </nav>

    )
}