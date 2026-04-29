const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-12">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">

                    <div>
                        <h2 className="text-xl font-bold mb-4 text-blue-500">Contact Us</h2>
                        <p className="text-gray-300 text-sm sm:text-base">
                            Email: support@bookshop.com
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base">
                            Phone: +880 123 456 789
                        </p>
                        <p className="text-gray-300 text-sm sm:text-base">
                            Address: Dhaka, Bangladesh
                        </p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-blue-500">Follow Us</h2>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-base">
                            <a href="#" className="hover:text-blue-500 transition">Facebook</a>
                            <a href="#" className="hover:text-blue-500 transition">Twitter</a>
                            <a href="#" className="hover:text-blue-500 transition">Instagram</a>
                            <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm px-4">
                © {new Date().getFullYear()} BOOKSHOP. All rights reserved.
            </div>



        </footer>
    );
};

export default Footer;