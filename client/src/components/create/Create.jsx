export default function Create() {
    return (
        <div className="container mx-auto p-4">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-[black] mb-6 flex items-center justify-center font-serif text-5xl">Create Book</h1>

            <form className="grid grid-cols-1 gap-6">
                {/* Title */}
                <div className="p-2">
                    <input type="text" id="title" name="title" placeholder="Title" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]" />
                </div>


                {/* Author */}
                <div className="p-2">
                    <input type="text" id="author" name="author" placeholder="Author" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]" />
                </div>

                {/* Image Url */}
                <div className="p-2">
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]" />
                </div>

                <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Genre */}
                    <div>
                        <input type="text" id="genre" name="genre" placeholder="Genre" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]" />
                    </div>

                    {/* First published */}
                    <div className="flex items-center bg-[#f6f6f6] rounded-md p-2">
                        <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"></path>
                            </svg>
                            <span className="ml-2">First Published</span>
                        </span>
                        <input type="datetime-local" id="first-published" name="FirstPublished" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 background-color: #f6f6f6;" />
                    </div>
                </div>

                <div className="p-2">
                    {/* Summary */}
                    <div>
                        <textarea id="description" name="summary" rows="3" placeholder="Summary" className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-full mt-6 p-2">
                    <button type="submit" className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}