import { Link } from "react-router";

export default function Footer() {
    return (
        <div className="text-center mt-14">
            <p className="flex items-center justify-center mb-1 text-2xl font-semibold text-red-900">
                <img src="/images/logo.png" className="h-12 mr-7 sm:h-24" alt="Book Insider logo" />
                    The magic of words
            </p>

            <span className="block text-sm text-center text-gray-500">© 2025 Book Insider Built with
                <Link to="https://react.dev/"
                    className="text-blue-500 hover:underline"> React</Link>,
                <Link
                    to="https://tailwindcss.com" className="text-blue-500 hover:underline"> Tailwind CSS
                </Link>  and
                <Link
                    to={"https://github.com/softuni-practice-server/softuni-practice-server"} 
                    className="text-blue-500 hover:underline"> SoftUni Practice Server
                </Link>
            </span>
        </div>
    );
}