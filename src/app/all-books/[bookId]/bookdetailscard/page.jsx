'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import toast from "react-hot-toast";

const BookDetailsCard = ({ book }) => {
    return (

        <div className="min-h-screen flex items-center justify-center px-4 md:px-20 py-10">

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-6 shadow-lg rounded-xl bg-amber-50 w-full max-w-4xl">

                <div className="shrink-0 p-3 rounded mx-auto md:mx-0">

                    <Image
                        src={book.image_url}
                        alt="Book Cover"
                        width={180}
                        height={240}
                        className="rounded-md mb-4 object-cover mx-auto md:mx-0"
                    />



                </div>

                <div className="flex-1 flex flex-col justify-center space-y-2 text-center md:text-left">

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {book.title}
                    </h2>

                    <p className="text-base md:text-lg text-gray-900">
                        by <span className="font-medium text-gray-800">{book.author}</span>
                    </p>

                    <span className="text-yellow-500 text-sm md:text-base">
                        ★ ★ ★ ★ ★
                    </span>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        {book.description}
                    </p>

                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Category:</span> {book.category}
                    </p>

                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Quantity:</span> {book.available_quantity}
                    </p>

                    <div className="pt-3 flex justify-center md:justify-start">

                        <Button
                            onClick={() => toast.success("Book borrowed successfully!")}
                            className="bg-green-800 hover:bg-green-600 text-white px-5 py-2 rounded-md transition w-full md:w-auto"
                        >
                            Borrow this Book
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookDetailsCard;