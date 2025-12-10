import { Link } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { toast } from "react-toastify";

export default function Register() {

    const initialValues = {
        email: "",
        password: "",
        rePassword: ""
    }

    const { registerHandler } = useContext(UserContext)
    const { formHandler, formImputRegister } = useForm(initialValues, onSubmit, "");

    function onSubmit(formData) {
        const { email, password, rePassword } = formData;

        if (!email || !password) {
            return toast.error("Email and password are required!");
        };

        if (password !== rePassword) {
            return toast.error("Passwords missmatch!");
        };

        const user = { email, password }

        registerHandler(user)
    }

    return (
        <section>
            <div className="relative bg-[url('/images/login-register.jpg')] min-h-screen opacity-40">
            </div>
            <div className="absolute bottom-1/3 left-1/3 bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
                <form action={formHandler}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                            {...formImputRegister("email")}
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            {...formImputRegister("password")}
                            id="password"
                            type="password"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirm_password" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                        <input
                            {...formImputRegister("rePassword")}
                            type="password"
                            id="confirm_password"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#ccac68] hover:bg-[#db9e1a] text-white py-3 rounded-lg font-medium transition duration-300">Register</button>
                </form>
                <p className="mt-6 text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
            </div>
        </section>
    );
}