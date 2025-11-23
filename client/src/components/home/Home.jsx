import BookCard from "../book-card/BookCard.jsx";
import Footer from "../footer/Footer.jsx";

export default function Home() {
    return (
        <div >
            <div className="h-34 bg-gradient-to-r via-gray-500 mt-4 flex items-center justify-center">
                <h1 className="font-bold text-6xl tracking-tight font-serif text-white">All your favorite books here</h1>
            </div>
            <section className="flex items-center justify-center space-x-34">
                <BookCard />
                <BookCard />
                <BookCard />
            </section>

            <Footer />

        </div>
    );
}