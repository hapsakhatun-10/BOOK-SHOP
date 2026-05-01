"use client";

import { useState } from "react";
import { IoBookSharp } from "react-icons/io5";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import Link from "next/link";

const Navbar = ({ user, router, handleSignOut, Avatar }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b bg-blue-100 sticky top-0 z-50">

            <nav className="flex justify-between items-center py-3 px-4 md:px-12 max-w-7xl mx-auto">

                {/* LEFT SIDE (LOGO + MOBILE MENU BTN) */}
                <div className="flex items-center gap-3">

                    <IoBookSharp className="h-8 w-8" />

                    <h2 className="font-extrabold text-2xl">BOOKSHOP</h2>

                    {/* MOBILE MENU BUTTON (RIGHT OF LOGO) */}
                    <button
                        className="md:hidden ml-2"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX size={22} /> : <FiMenu size={38} />}
                    </button>

                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/all-books">All Books</Link>
                    <Link href="/profile">Profile</Link>
                </div>

                {/* DESKTOP AUTH */}
                <div className="hidden md:flex items-center gap-5">

                    {!user ? (
                        <div className="flex gap-6 text-sm">
                            <Link href="/signin">SignIn</Link>
                            <Link href="/signup">SignUp</Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Avatar
                                onClick={() => router.push("/profile")}
                                className="w-10 h-10 cursor-pointer"
                            />
                            <button onClick={handleSignOut}>
                                Logout
                            </button>
                        </div>
                    )}

                </div>

            </nav>

            {/* MOBILE DROPDOWN MENU */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 px-6 pb-4 border-t bg-blue-100 text-sm">

                    <Link onClick={() => setOpen(false)} href="/">
                        Home
                    </Link>

                    <Link onClick={() => setOpen(false)} href="/all-books">
                        All Books
                    </Link>

                    <Link onClick={() => setOpen(false)} href="/profile">
                        Profile
                    </Link>

                    {user && (
                        <button
                            onClick={() => {
                                handleSignOut();
                                setOpen(false);
                            }}
                            className="flex items-center gap-2 text-red-600"
                        >
                            <FiLogOut />
                            Logout
                        </button>
                    )}

                </div>
            )}

        </div>
    );
};

export default Navbar;