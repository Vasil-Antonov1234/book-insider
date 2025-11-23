export default function BookCard() {
    return (
        <div className="group relative h-118 w-94 [perspective:1000px] mt-8">
            <div
                className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]"
            >
                <div
                    className="absolute w-full h-full rounded-xl bg-transparent-to-br from-gray-300 to-gray-800 p-6 text-white [backface-visibility:hidden]"
                >
                    <img src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659407155i/61714633.jpg" alt="" className="w-full h-full object-fit rounded" />
                    <p
                        className="px-4 py-2 bg-black opacity-70 text-black-900 mt-1 rounded-lg font-semibold transition-colors"
                    >Rating: 7.8
                    </p>
                </div>

                <div
                    className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 p-6 text-white [transform:rotatey(-180deg)] [backface-visibility:hidden]"
                >
                    <div className="flex flex-col h-full">
                        <div className="text-2xl font-bold mb-4">The Wager: A Tale of Shipwreck, Mutiny and Murder</div>
                        <div className="flex-grow">
                            <p className="text-lg">
                                From the #1 New York Times bestselling author of Killers of the Flower Moon, a page-turning story of shipwreck, survival, and savagery, culminating in a court martial that reveals a shocking truth.
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <button
                                className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                            >See more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}