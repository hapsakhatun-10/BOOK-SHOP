"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = ({ isLoggedIn, user }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full  bg-blue-100 shadow-md px-6 py-4 flex items-center justify-between">

            <Link
                href="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
            >
                BOOKSHOP
            </Link>

            <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/all-books" className="hover:text-blue-600">All Books</Link>
                <Link href="/profile" className="hover:text-blue-600">My Profile</Link>
            </div>

            <div className="hidden md:block">
                {!isLoggedIn ? (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Login
                    </button>
                ) : (
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-medium">
                            {user?.name}
                        </span>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                            Logout
                        </button>
                    </div>
                )}
            </div>

            <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/books" onClick={() => setMenuOpen(false)}>All Books</Link>
                    <Link href="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>

                    {!isLoggedIn ? (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                            Login
                        </button>
                    ) : (
                        <>
                            <span>{user?.name}</span>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;