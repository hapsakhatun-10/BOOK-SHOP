"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b px-2">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <h2 className="font-extrabold text-3xl tracking-wide text-blue-500">
                    BOOKSHOP
                </h2>

                <div className="flex items-center gap-6 text-sm font-medium">


                    <Link className="links"
                        href="/">
                        Home
                    </Link>



                    <Link className="links"
                        href="/all-books"  >
                        All Books
                    </Link>



                    <Link className="links"
                        href="/profile" >
                        Profile
                    </Link>


                </div>

                <div className="flex items-center gap-4">

                    <ul className="flex items-center gap-5 text-sm">
                        <li><Link href="/signup">SignUp</Link></li>
                        <li><Link href="/signin">SignIn</Link></li>
                    </ul>



                    <Button size="sm" variant="danger">
                        SignOut
                    </Button>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;