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
        <div className="flex gap-6">

            <div>
                <CategorySidebar onSelect={setSelectedCategory} />
            </div>

            <div className=" md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <FeatureCard key={book.id} book={book} />
                    ))}
                </div>

            </div>

        </div>
    );
}