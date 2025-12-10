import { toast } from "react-toastify";
import useForm from "../../../hooks/useForm.js";

export default function UserEdit() {

    const initialValues = {
        email: "",
        imageUrl: "",
    }

    const { formImputRegister, formHandler } = useForm(initialValues, onSubmit, "")

    async function onSubmit(formData) {
        const { email, imageUrl } = formData;

        if (!email) {
            return toast.error("Email is required");
        };

        if (!imageUrl) {
            return toast.error("Image Url is required");
        };

    }

    return (
        <section>
            <div className="min-h-screen">
            </div>
            <div className="absolute bottom-1/3 left-1/3 bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Edit Profile</h2>
                <form action={formHandler}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Edit Email Address</label>
                        <input
                            {...formImputRegister("email")}
                            id="email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">Add Image Url</label>
                        <input
                            {...formImputRegister("imageUrl")}
                            id="imageUrl"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#ccac68] hover:bg-[#db9e1a] text-white py-3 rounded-lg font-medium transition duration-300">Edit</button>
                </form>
            </div>
        </section>
    );
}