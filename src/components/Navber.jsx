import Link from "next/link";



const Navbar = ({ isLoggedIn, user }) => {


    return (
        <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">



            <Link
                href="/"
                className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition"
            >
                BOOKSHOP
            </Link >

            <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-blue-600 transition">Home</a>
                <a href="#" className="hover:text-blue-600 transition">All Books</a>
                <a href="#" className="hover:text-blue-600 transition">My Profile</a>
            </div>

            <div>
                {!isLoggedIn ? (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>
                ) : (
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-medium">
                            {user?.name}
                        </span>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                            Logout
                        </button>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;