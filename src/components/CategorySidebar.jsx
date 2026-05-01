"use client";
import { useState } from "react";

const categories = ["All", "Story", "Tech", "Science"];

export default function CategorySidebar({ onSelect }) {
    const [active, setActive] = useState("All");

    const handleClick = (cat) => {
        setActive(cat);
        onSelect && onSelect(cat);
    };

    return (
        <div className=" shadow-lg rounded-xl bg-blue-200 p-4 h-full w-full sticky top-5">
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>

            <ul className="flex flex-col text-center gap-2">
                {categories.map((cat) => (
                    <li
                        key={cat}
                        onClick={() => handleClick(cat)}
                        className={`cursor-pointer px-3 py-2  rounded-lg transition 
                         ${active === cat
                                ? "bg-amber-50 rounded  text-black "
                                : "hover:bg-gray-100"
                            }`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
}