import FeatureCard from "./FeatureCard";



const Featured = async () => {
    const res = await fetch(
        "https://book-shop-azure-beta.vercel.app/data.json",
        { cache: "no-store" }
    );



    const books = await res.json();
    const featuredBooks = books.slice(0, 4);



    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
                Featured Books
            </h2>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {featuredBooks.map((book) => (
                    <FeatureCard book={book} key={book.id} />
                ))}
            </div>
        </div>
    );
};

export default Featured;