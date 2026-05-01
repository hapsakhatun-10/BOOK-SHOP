
'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import toast from "react-hot-toast";

const BookDetailsCard = ({ book }) => {
    return (


        <div className="min-h-screen  flex items-center justify-center  md:px-20">

            <div className="flex  md:flex-row gap-8 p-6 shadow-lg rounded-xl bg-amber-50   max-w-4xl">

                <div className="shrink-0 p-3  rounded mx-auto md:mx-0">
                    <Image
                        src={book.image_url}
                        alt="Book Cover"
                        width={180}
                        height={240}
                        className="rounded-md mb-4 object-cover"
                    />

                    <button className="btn bg-green-800 w-full text-white btn-success">Want to read</button>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-2 text-right md:text-left">

                    <h2 className="text-3xl font-bold text-gray-900">
                        {book.title}
                    </h2>

                    <p className="text-lg text-gray-900">
                        by <span className="font-medium text-gray-800">{book.author}</span>
                    </p>

                    <span className="text- text-sm">
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

                    <div className="pt-3">
                        <Button
                            onClick={() => toast.success("Book borrowed successfully!")}
                            className="hover:bg-green-400 bg-green-800 px-5 py-2 rounded-md transition"
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