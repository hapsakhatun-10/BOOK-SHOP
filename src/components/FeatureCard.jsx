import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ book }) => {
    return (
        <div className="h-full w-full">

            <div className="bg-blue-50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">

                {/* IMAGE */}
                <div className="relative w-full h-52 sm:h-56 md:h-64">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">

                    <h2 className="text-base sm:text-lg font-semibold line-clamp-2">
                        {book.title}
                    </h2>

                    <p className="text-gray-600 text-sm mt-1">
                        Author: {book.author}
                    </p>

                    {/* BUTTON */}
                    <div className="mt-auto pt-4">
                        <Link href={`/all-books/${book.id}`} className="block w-full">

                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition text-sm sm:text-base">
                                View
                            </button>

                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default FeatureCard;