import { Card } from "@heroui/react";
import Image from "next/image";

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
                    <Card key={book.id} className="p-3 shadow-lg">

                        <div className="relative w-full h-48">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <div className="mt-3 space-y-1">
                            <h2 className="text-lg font-semibold">
                                {book.title}
                            </h2>

                            <p className="text-gray-600">
                                Author: {book.author}
                            </p>
                        </div>

                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Featured;