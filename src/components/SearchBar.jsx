"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ defaultValue = "" }) {

    const router = useRouter();
    const [value, setValue] = useState(defaultValue);

    const handleSubmit = (e) => {
        e.preventDefault();

        const query = value.trim();

        if (query) {
            router.push(`/all-books?search=${query}`);
        } else {
            // 🔥 empty হলে full reset + refresh
            router.push(`/all-books`);
            router.refresh();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex justify-center gap-2">

            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search books..."
                className="w-full md:w-1/2 px-4 py-2 border rounded-lg"
            />

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Search
            </button>

        </form>
    );
}