import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";

export default function Header() {
    const { isAuthenticated } = useContext(UserContext)

    return (
        <nav className="bg-gray-600 text-white py-3 px-4 flex items-center justify-between">
            <Link className="font-bold text-xl tracking-tight" to="/">Book Insider</Link>
            <div className="flex items-center">
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/">Home</Link>
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/catalog">Catalog</Link>
                {isAuthenticated ?
                    <>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/create">Create Book</Link>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to={"/logout"}>Logout</Link>
                    </> :
                    <>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/register">Register</Link>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/login">Login</Link>
                    </>
                }
            </div>
        </nav>
    )
}