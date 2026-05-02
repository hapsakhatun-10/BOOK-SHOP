import BooksCategory from "@/components/BooksCategory";
import SearchBar from "@/components/SearchBar";

export default async function AllBooksPage({ searchParams }) {

    // ✅ FIX: unwrap promise
    const params = await searchParams;

    const search = (params?.search || "").trim();

    const res = await fetch("https://book-shop-azure-beta.vercel.app/data.json", {
        cache: "no-store",
    });

    const allbooks = await res.json();

    const filteredBooks =
        search !== ""
            ? allbooks.filter((book) =>
                book.title?.toLowerCase().includes(search.toLowerCase())
            )
            : allbooks;

    return (
        <div className="px-4 md:px-10 py-8">

            <SearchBar defaultValue={search} />

            <BooksCategory books={filteredBooks} />

        </div>
    );
}