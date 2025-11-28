import { Link } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function Register() {

    const initialValues = {
        email: "",
        password: "",
        rePassword: ""
    }

    const { registerHandler } = useContext(UserContext)
    const { formHandler, register } = useForm(initialValues, onSubmit, "");

    function onSubmit(formData) {
        const { email, password, rePassword } = formData;

        if (!email || !password) {
            return alert("Email and password are required!");
        };

        if (password !== rePassword) {
            return alert("Passwords missmatch!");
        };

        const user = { email, password }

        registerHandler(user)
    }

    return (
        <section className="bg-[url('/images/login-register.jpg')] bg-cover bg-center flex items-center justify-center min-h-screen">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
                <form action={formHandler}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                            {...register("email")}
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            {...register("password")}
                            id="password"
                            type="password"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirm_password" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                        <input
                            {...register("rePassword")}
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