import Image from "next/image";

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(
        "https://book-shop-azure-beta.vercel.app/data.json",
        { cache: "no-store" }
    );

    const books = await res.json();

    const book = books.find(b => b.id == bookId);

    return (
        <>


            <div className="flex justify-center pt-6 gap-1">

                <Image
                    src={book.image_url}
                    alt="Book Cover"
                    width={220}
                    height={150}
                    className="object-cover rounded mr-5 shadow"
                />

                <div className="flex-1">

                    <h2 className="text-lg font-semibold text-gray-900">
                        {book.title}
                    </h2>

                    <p className="text-sm text-gray-700">
                        by <span className="font-medium">{book.author}</span>
                    </p>

                    <span className="text-xs text-gray-500 block mt-1">
                        Rate it: ☆ ☆ ☆ ☆ ☆
                    </span>

                    <p className="text-xs text-gray-600 mt-2">
                        {book.description}
                    </p>

                </div>

            </div>


        </>


    );
};

export default BookDetailsPage;