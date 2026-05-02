"use client";

import { IoBookSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import MobileMenu from "./MonileMenu";

const Navbar = () => {

    const router = useRouter();

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/signin");
                },
            },
        });
    };

    return (
        <div className="border-b bg-blue-100 backdrop-blur-md sticky top-0 z-50">
            <nav className="flex justify-between items-center py-3 px-4 md:px-12 max-w-7xl mx-auto">

                <Link href="/" className="flex items-center gap-3">
                    <IoBookSharp className="h-8 w-8" />
                    <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide text-black">
                        BOOKSHOP
                    </h2>
                </Link>

                <div className="hidden md:flex items-center gap-12 text-sm font-medium">
                    <Link className="links" href="/"

                    >Home</Link>
                    <Link className="links" href={user ? "/all-books" : "/signup"}
                    >All Books</Link>
                    <Link className="links" href={user ? "/profile" : "/signup"}>Profile</Link>
                </div>

                <div className="flex items-center gap-3">

                    {!user && (
                        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                            <li>
                                <Link href="/signup" className="hover:text-blue-500">
                                    SignUp
                                </Link>
                            </li>
                            <li>
                                <Link href="/signin" className="hover:text-blue-500">
                                    SignIn
                                </Link>
                            </li>
                        </ul>
                    )}

                    {user && (
                        <div className="flex items-center gap-3">

                            <Avatar
                                onClick={() => router.push("/profile")}
                                className="w-9 h-9 sm:w-10 sm:h-10 ring-2 ring-blue-500 cursor-pointer"
                            >
                                <Avatar.Image src={user?.image} />
                                <Avatar.Fallback className="bg-gray-200 text-black">
                                    {user?.name?.charAt(0)}
                                </Avatar.Fallback>
                            </Avatar>

                            <Button
                                onClick={handleSignOut}
                                className="hidden md:flex w-10 h-10 items-center justify-center bg-red-500 hover:bg-red-600 text-black rounded-md"
                            >
                                <Icon icon="mdi:logout" width="20" height="20" />
                            </Button>

                        </div>
                    )}

                    <div className="md:hidden">
                        <MobileMenu user={user} onLogout={handleSignOut} />
                    </div>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;