"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

const MobileMenu = ({ user, onLogout }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="p-2 border rounded-md"
            >
                ☰
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">

                    <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        href={user ? "/all-books" : "/signup"}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                    >
                        All Books
                    </Link>

                    <Link
                        href={user ? "/profile" : "/signup"}
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                    >
                        Profile
                    </Link>

                    <Button
                        onClick={onLogout}
                        className="w-full h-12 flex items-center justify-center bg-red-700 hover:bg-red-600 text-black  rounded-md shadow-sm transition"
                    >
                        <Icon icon="mdi:logout" width="24" height="24" />
                    </Button>


                </div>
            )}

        </div>
    );
};

export default MobileMenu;