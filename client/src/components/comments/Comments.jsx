import CreateComment from "../create-comment/CreateComment.jsx";

export default function Comments() {
    return (
        <div className="bg-[#e4e4e7] p-6 w-190 ml-140">
            <h2 className="text-lg font-bold mb-4">Comments</h2>
            <div className="flex flex-col space-y-4">
                <div className="p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-gray-700 text-sm mb-2">Posted on April 17, 2023</p>
                    <p className="text-gray-700">This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-gray-700 text-sm mb-2">Posted on April 16, 2023</p>
                    <p className="text-gray-700">I agree with John. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold">Bob Johnson</h3>
                    <p className="text-gray-700 text-sm mb-2">Posted on April 15, 2023</p>
                    <p className="text-gray-700">I have a different opinion. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                    <CreateComment />
            </div>
        </div>
    );
}




{/* <form className="max-w-2xl bg-white rounded-lg border p-2 mx-auto">
    <div className="px-3 mb-2 mt-2">
        <textarea placeholder="comment" className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
    </div>
    <div className="flex justify-end px-4">
        <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment" />
    </div>
</form> */}