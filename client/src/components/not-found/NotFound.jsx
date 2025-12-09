import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
            <div className="bg-[url('/images/404-not-found.jpg')] bg-cover bg-center flex items-end justify-center min-h-screen">
                <Link to="/" className="mb-41 font-bold text-red-900 text-3xl">Back to Home</Link>
            </div>
        </>
    );
}