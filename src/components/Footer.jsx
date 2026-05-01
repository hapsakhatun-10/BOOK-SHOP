import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white ">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">

                    {/* Contact */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-blue-500">
                            Contact Us
                        </h2>

                        <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                            <p>Email: support@bookshop.com</p>
                            <p>Phone: +880 123 456 789</p>
                            <p>Address: Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-blue-500">
                            Follow Us
                        </h2>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300">

                            <a href="#" className="flex items-center gap-2 hover:text-blue-500 transition">
                                <FaFacebook className="text-xl" />
                                Facebook
                            </a>

                            <a href="#" className="flex items-center gap-2 hover:text-sky-400 transition">
                                <FaTwitter className="text-xl" />
                                Twitter
                            </a>

                            <a href="#" className="flex items-center gap-2 hover:text-pink-500 transition">
                                <FaInstagram className="text-xl" />
                                Instagram
                            </a>

                            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
                                <FaLinkedin className="text-xl" />
                                LinkedIn
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center py-5 border-t border-gray-700 text-gray-400 text-sm px-4">
                © {new Date().getFullYear()} BOOKSHOP. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;