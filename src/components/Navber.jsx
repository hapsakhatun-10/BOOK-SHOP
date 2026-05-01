"use client";


import { Icon } from "@iconify/react";

import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

    const userData = authClient.useSession()
    const user = userData.data?.user

    const handleSignOut = async () => {

        await authClient.signOut();

    }




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

                    {!user && <ul className="flex items-center gap-5 text-sm">
                        <li><Link href="/signup">SignUp</Link></li>
                        <li><Link href="/signin">SignIn</Link></li>
                    </ul>}

                </div>

                {user && <div className="flex items-center justify-center gap-3">

                    <Avatar className="w-10 h-10">
                        <Avatar.Image
                            alt="User"
                            src={user?.image}
                            referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>
                            {user?.name?.charAt(0)}
                        </Avatar.Fallback>
                    </Avatar>

                    <Button
                        size="sm"
                        onClick={handleSignOut}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition"
                    > SignOut
                        <Icon icon="mdi:logout" width="18" />
                    </Button>

                </div>}

            </nav>
        </div>
    );
};

export default Navbar;