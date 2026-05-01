import FeatureCard from "./FeatureCard";

const Featured = async () => {

    const res = await fetch(
        "https://book-shop-azure-beta.vercel.app/data.json",
        { cache: "no-store" }
    );

    const books = await res.json();
    const featuredBooks = books.slice(0, 4);

    const loopBooks = [...featuredBooks, ...featuredBooks];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">

            <h2 className="text-2xl font-bold text-center mb-2">
                Featured Books
            </h2>

            <p className="text-center text-gray-500 mb-6 max-w-2xl mx-auto">
                Handpicked books recommended for you. Explore top-rated stories, technology, and knowledge-filled reads.
            </p>

            {/* MARQUEE */}
            <div className="overflow-hidden w-full">

                <div className="flex w-max animate-scroll gap-6">

                    {loopBooks.map((book, index) => (
                        <div key={index} className="w-64 flex-shrink-0">
                            <FeatureCard book={book} />
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Featured;