import { Link } from "react-router";

export default function Header() {
    return (
        <nav className="bg-gray-600 text-white py-3 px-4 flex items-center justify-between">
            <Link className="font-bold text-xl tracking-tight" to="/">Book Insider</Link>
            <div className="flex items-center">
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/">Home</Link>
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/catalog">Catalog</Link>
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/register">Register</Link>
                <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/login">Login</Link>
            </div>
        </nav>
    )
}