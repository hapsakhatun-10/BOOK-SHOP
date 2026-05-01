"use client";

import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

const ProfilePage = () => {
    const { data } = authClient.useSession();
    const user = data?.user;


    if (!user) return <p className="text-center mt-10">Not logged in</p>;

    return (
        <div className="max-w-6xl mx-auto p-6  bg-amber-50 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="md:col-span-2 space-y-6">

                <div className="flex gap-6">

                    <Avatar
                        src={user.image}
                        name={user.name}
                        className="w-28 h-28 text-2xl"
                        referrerPolicy="no-referrer"

                    />

                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            {user.name}
                            <span className="text-sm text-blue-600 cursor-pointer">

                                <UpdateUserModal />
                            </span>
                        </h1>

                        <div className="mt-3 text-sm text-gray-700">
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Activity:</strong> Joined recently</p>
                        </div>
                    </div>
                </div>


                <div className="text-sm text-blue-600 flex gap-4">
                    <span>3.8+ ratings</span>
                    <span>6 reviews</span>

                </div>

                <div>
                    <h2 className="border-b pb-1 font-semibold text-sm uppercase">
                        {user.name} s bookshelves
                    </h2>

                    <div className="flex gap-6 mt-2 text-blue-600 text-sm">
                        <span>to-read (0)</span>
                        <span>currently-reading (0)</span>
                        <span>read (0)</span>
                        <span>did-not-finish (0)</span>
                    </div>
                </div>

                <div>
                    <h2 className="border-b pb-1 font-semibold text-sm uppercase flex justify-between">
                        Quotes
                        <span className="text-gray-500 cursor-pointer">edit</span>
                    </h2>

                    <p className="text-sm mt-2">
                        No quotes yet.
                        <span className="text-blue-600 cursor-pointer ml-1">
                            Add quotes now »
                        </span>
                    </p>
                </div>


                <div>
                    <h2 className="border-b pb-1 font-semibold text-sm uppercase">
                        Friend comments
                    </h2>

                    <textarea
                        className="w-full border rounded p-3 mt-3"
                        rows={4}
                        placeholder="Write a comment..."
                    />

                    <button className="mt-2 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
                        Post
                    </button>
                </div>
            </div>

            <div className="space-y-6">


                <div>
                    <h2 className="border-b pb-1 font-semibold text-sm uppercase">
                        Year in books
                    </h2>

                    <div className="flex gap-3 mt-3 items-center">
                        <Icon icon="mdi:calendar" className="text-3xl text-pink-400" />
                        <p className="text-sm text-gray-600">
                            See your yearly reading stats
                        </p>
                    </div>

                    <p className="text-blue-600 text-sm mt-2 cursor-pointer">
                        Go to your year in books »
                    </p>
                </div>


                <div>
                    <h2 className="border-b pb-1 font-semibold text-sm uppercase">
                        Friends
                    </h2>

                    <p className="text-blue-600 text-sm mt-2 cursor-pointer">
                        Invite your friends »
                    </p>
                </div>

                {/* FAVORITE GENRES */}
                <div>
                    <h2 className="border-b pb-1 font-semibold text-sm uppercase flex justify-between">
                        Favorite genres
                        <span className="text-gray-500 cursor-pointer">edit</span>
                    </h2>

                    <p className="text-sm mt-2">
                        Philosophy, Science fiction, Spirituality
                    </p>
                </div>

                <button
                    onClick={async () => await authClient.signOut()}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg"
                >
                    <Icon icon="mdi:logout" />
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;