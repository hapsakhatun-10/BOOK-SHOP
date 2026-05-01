"use client";

import { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import FeatureCard from "@/components/FeatureCard";

export default function BooksCategory({ books }) {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [open, setOpen] = useState(false);

    const filteredBooks =
        selectedCategory === "All"
            ? books
            : books.filter((book) => book.category === selectedCategory);

    return (
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-6">

            <div className="md:hidden">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-400 text-white px-4 py-2 rounded-md"
                >
                    Open Categories
                </button>
            </div>

            <div className="hidden md:block md:w-1/4">
                <CategorySidebar onSelect={setSelectedCategory} />
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex">
                    <div className="bg-white w-64 h-full p-4">

                        <CategorySidebar
                            onSelect={(cat) => {
                                setSelectedCategory(cat);
                                setOpen(false);
                            }}
                        />
                    </div>

                    <div
                        className="flex-1"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}

            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <FeatureCard key={book.id} book={book} />
                    ))}
                </div>
            </div>

        </div>
    );
}