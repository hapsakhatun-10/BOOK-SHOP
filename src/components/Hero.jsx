import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center text-white">

            <Image
                src="/images/books3.avif"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center px-4">

                <h1 className="text-3xl md:text-5xl font-bold">
                    Discover Your Next Favorite Book
                </h1>

                <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
                    Browse through our curated collection of books across different genres and find something you’ll love to read.
                </p>

            </div>

        </div>
    );
};

export default Hero;