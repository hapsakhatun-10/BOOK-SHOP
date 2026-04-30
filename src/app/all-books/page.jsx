import FeatureCard from "@/components/FeatureCard";

const ALlPhotosPage = async () => {
    const res = await fetch("https://book-shop-azure-beta.vercel.app/data.json")

    const allbooks = await res.json();


    console.log(allbooks)


    return (
        <>
            <div className="px-4 md:px-10 py-10">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Discover Your Next Favorite Book
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Browse through our curated collection of books across different genres and find something you’ll love to read.
                    </p>
                </div>

                <div className="px-4 md:px-10 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {allbooks.map((book) => (
                            <div
                                key={book.id}
                                className="rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-3"
                            >
                                <FeatureCard book={book} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default ALlPhotosPage;