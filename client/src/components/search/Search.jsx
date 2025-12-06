export default function Search({
    onSearch
}) {



    return (
        <form action={onSearch} className="flex w-full justify-end items-center dark:bg-gray-800">

            <div className="flex relative rounded-md w-full px-4 max-w-xl">
                <input type="text" name="title" id="query" placeholder="title"
                    className="bg-white w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-500 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
                <input type="text" name="author" id="query" placeholder="author"
                    className="bg-white w-full p-3 border-2 border-r-white border-r-white rounded-l-none border-gray-500 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
                {/* <label htmlFor="genre"></label> */}
                <select name="genre" id="genre" className="bg-white w-full p-3 border-2 border-r-white rounded-r-none border-gray-500 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none">
                    <option value="" name="genre" className="text-gray-400">genre</option>
                    <option value="Adventure" name="genre">Adventure</option>
                    <option value="Fiction" name="genre">Fiction</option>
                    <option value="Fantasy" name="genre">Fantasy</option>
                    <option value="Horror" name="genre">Horror</option>
                    <option value="Mystery" name="genre">Mystery</option>
                    <option value="Crime" name="genre">Crime</option>
                    <option value="Thriller" name="genre">Thriller</option>
                    <option value="Classic" name="genre">Classic</option>
                </select>
                {/* <input type="text" name="genre" id="query" placeholder="Genre"
                    className="bg-white w-full p-3 border-2 border-r-white rounded-r-none border-gray-500 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " /> */}
                <button
                    className="inline-flex items-center gap-2 bg-gray-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-[#b6c0d1] hover:text-black cursor-pointer">
                    <span>search</span>
                </button>
            </div>

        </form>
    );
}


// http://localhost:3030/data/books?where=title LIKE "" AND author LIKE "" AND genre%3D%22Adventure%22

{/* <input type="text" name="genre" id="query" placeholder="Genre"
                    className="bg-white w-full p-3 border-2 border-r-white rounded-r-none border-gray-500 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " /> */}