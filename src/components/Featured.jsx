import FeatureCard from "./FeatureCard";

const Featured = async () => {

    const res = await fetch(
        "https://book-shop-azure-beta.vercel.app/data.json",
        { cache: "no-store" }
    );

    const books = await res.json();
    const featuredBooks = books.slice(0, 4);

    // duplicate for smooth loop
    const loopBooks = [...featuredBooks, ...featuredBooks];

    return (
        <div className="p-6 lg:px-[220px]">

            <h2 className="text-2xl font-bold text-center mb-6">
                Featured Books
            </h2>

            {/* MARQUEE WRAPPER */}
            <div className="overflow-hidden">

                <div className="flex w-max animate-scroll gap-6">

                    {loopBooks.map((book, index) => (
                        <div key={index} className="w-64 flex shrink-0">
                            <FeatureCard book={book} />
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Featured;