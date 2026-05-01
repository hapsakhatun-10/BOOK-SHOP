import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function proxy(request) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/profile", "/all-books/:path*"],
};