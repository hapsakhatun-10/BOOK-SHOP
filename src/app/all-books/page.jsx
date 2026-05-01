import BooksCategory from "@/components/BooksCategory";

const AllBooksPage = async () => {

    const res = await fetch("https://book-shop-azure-beta.vercel.app/data.json");
    const allbooks = await res.json();

    return (
        <div className="px-4 md:px-10 py-8">


            <BooksCategory books={allbooks} />

        </div>
    );
};

export default AllBooksPage;