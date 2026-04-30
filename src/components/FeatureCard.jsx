import { Card, Button, Link } from "@heroui/react";
import Image from "next/image";

const FeatureCard = ({ book }) => {
    return (
        <div>
            <Card key={book.id} className="p-3  bg-blue-50">

                <div className="relative h-100">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                <div className="mt-3 space-y-1">
                    <h2 className="text-lg font-semibold">
                        {book.title}
                    </h2>
                    <div className="flex justify-between">
                        <p className="text-gray-600">
                            Author: {book.author}
                        </p>
                        <Link href={`/all-books/${book.id}`}>
                            <Button>View Details</Button>

                        </Link>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FeatureCard;