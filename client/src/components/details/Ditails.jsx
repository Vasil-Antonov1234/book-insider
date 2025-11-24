import { Link } from "react-router";

export default function Details() {
    return (
        <section className="bg-[url('/images/details.jpg')] bg-cover bg-center flex items-center justify-center min-h-screen">
            <div className="flex gap-6 items-center bg-[#e6c683] p-4 border border-default rounded-base shadow-xs md:flex-row w-290 h-190 md:flex-row">
                <img className="w-164 h-180 object-cover" src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659407155i/61714633.jpg" alt="" />
                <div className="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-heading">The Wager: A Tale of Shipwreck, Mutiny and Murder</h5>
                    <p className="mb-6 text-body">
                        From the #1 New York Times bestselling author of Killers of the Flower Moon, a page-turning story of shipwreck, survival, and savagery, culminating in a court martial that reveals a shocking truth. The powerful narrative reveals the deeper meaning of the events on the Wager, showing that it was not only the captain and crew who ended up on trial, but the very idea of empire.
                        On January 28, 1742, a ramshackle vessel of patched-together wood and cloth washed up on the coast of Brazil. Inside were thirty emaciated men, barely alive, and they had an extraordinary tale to tell. They were survivors of His Majesty's Ship the Wager, a British vessel that had left England in 1740 on a secret mission during an imperial war with Spain. While the Wager had been chasing a Spanish treasure-filled galleon known as "the prize of all the oceans," it had wrecked on a desolate island off the coast of Patagonia. The men, after being marooned for months and facing starvation, built the flimsy craft and sailed for more than a hundred days, traversing nearly 3,000 miles of storm-wracked seas. They were greeted as heroes.
                    </p>
                    <div className="mt-auto flex gap-2">
                        <button className="block w-full bg-[#ccac68] hover:bg-[#db9e1a] text-white text-2xl font-bold py-2 px-4 rounded-lg">
                            Edit
                        </button>
                        <button className="block w-full bg-[#ccac68] hover:bg-[red] text-white text-2xl font-bold py-2 px-4 rounded-lg">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}