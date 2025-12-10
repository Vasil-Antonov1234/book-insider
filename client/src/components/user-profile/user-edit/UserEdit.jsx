import { toast } from "react-toastify";
import useForm from "../../../hooks/useForm.js";
import { useParams } from "react-router";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext.jsx";
import useFetch from "../../../hooks/useFetch.js";

export default function UserEdit() {
    const { request } = useFetch()
    const { userId } = useParams();
    const { editProfileHandler } = useContext(UserContext);

    const initialValues = {
        imageUrl: "",
    }

    const { formImputRegister, formHandler } = useForm(initialValues, onSubmit, "")

    async function onSubmit(formData) {
        
        const { imageUrl } = formData
        
        if (!imageUrl) {
            return toast.error("Image url is required");
        };

        const allAvatars = await request(`/data/avatars`);
        const avatar = allAvatars.filter((x) => x._ownerId === userId);
       
        editProfileHandler(imageUrl, avatar);

    };

    // /data/comments?where=recipeId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22&load=author%3D_ownerId%3Ausers

    return (
        <section>
            <div className="min-h-screen">
            </div>
            <div className="absolute bottom-1/3 left-1/3 bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Edit Avatar</h2>
                <form action={formHandler}>
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