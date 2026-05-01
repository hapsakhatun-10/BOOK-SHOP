"use client";
import { IoBookSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";




const Navbar = () => {

    const router = useRouter();

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="border-b  bg-blue-100 backdrop-blur-md sticky top-0 z-50">
            <nav className="flex justify-between items-center py-3 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    {/* Logo section */}

                    <IoBookSharp className=" h-8 w-8" />
                    <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide text-black">
                        BOOKSHOP
                    </h2>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-12 text-sm font-medium">
                    <Link
                        className="links"
                        href="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="links" href="/all-books">
                        All Books
                    </Link>



                    <Link
                        className="links" href="/profile">
                        Profile
                    </Link>



                </div>

                {/* Auth */}
                <div className="flex items-center gap-6">

                    {!user && (
                        <ul className="flex items-center gap-8 text-sm font-medium">
                            <li>
                                <Link className="hover:text-blue-500 transition" href="/signup">
                                    SignUp
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-blue-500 transition" href="/signin">
                                    SignIn
                                </Link>
                            </li>
                        </ul>
                    )}

                    {user && (
                        <div className="flex items-center gap-5">

                            <Avatar
                                onClick={() => router.push("/profile")}
                                className="w-10 h-10 ring-2 ring-blue-500 cursor-pointer"
                            >
                                <Avatar.Image src={user?.image} />
                                <Avatar.Fallback className="bg-gray-200 text-black">
                                    {user?.name?.charAt(0)}
                                </Avatar.Fallback>
                            </Avatar>

                            <Button
                                onClick={handleSignOut}
                                className="w-12 h-12 flex items-center justify-center bg-red-500 hover:bg-red-600 text-black rounded-md shadow-sm transition"
                            >
                                <Icon icon="mdi:logout" width="24" height="24" />
                            </Button>

                        </div>
                    )}

                </div>

            </nav >
        </div >
    );
};

export default Navbar;