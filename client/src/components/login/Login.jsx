import { Link } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";

export default function Login() {

    const initialValues = {
        email: "",
        password: ""
    }

    const {loginHandler} = useContext(UserContext);
    const {formHandler, formImputRegister} = useForm(initialValues, onSubmit, "")

    function onSubmit(userData) {
        const { email, password } = userData;

        if (!email || !password) {
            return alert("Email and password are required!");
        };

        loginHandler(userData);
    };

    return (
        <section className="bg-[url('/images/login-register.jpg')] bg-cover bg-center flex items-center justify-center min-h-screen">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2>
                <form action={formHandler}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input 
                            {...formImputRegister("email")}
                            type="email" 
                            id="email"  
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input 
                        {...formImputRegister("password")}
                        type="password" 
                        id="password" 
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    </div>
                    <button type="submit" className="w-full bg-[#ccac68] hover:bg-[#db9e1a] text-white py-3 rounded-lg font-medium transition duration-300">Login</button>
                </form>
                <p className="mt-6 text-center text-gray-600">Don't have an account yet? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
            </div>
        </section>
    );
}