import BookDetailsCard from "./bookdetailscard/page";


const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(
        "https://book-shop-azure-beta.vercel.app/data.json",
        { cache: "no-store" }
    );

    const books = await res.json();
    const book = books.find((b) => b.id == bookId);

    return <BookDetailsCard book={book} />;
};

export default BookDetailsPage;