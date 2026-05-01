import Link from "next/link";

const Banner = () => {
    return (
        <section
            className="relative h-[400px] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Find Your Next Read
                </h1>

                <p className="text-gray-200 mb-6">
                    Explore and discover amazing books easily.
                </p>

                <Link href="/all-books">
                    <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Browse Now
                    </button>
                </Link>
            </div>

        </section>
    );
};

export default Banner;