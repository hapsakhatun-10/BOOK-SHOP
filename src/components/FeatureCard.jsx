import { Card, Button } from "@heroui/react";
import Image from "next/image";

const FeatureCard = ({ book }) => {
    return (
        <div>
            <Card key={book.id} className="p-3 shadow-lg">

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

                        <Button>View Details</Button>


                    </div>
                </div>
            </Card>
        </div>
    );
};

export default FeatureCard;