import { NextResponse } from "next/server";

export async function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const refreshToken = request.cookies.get("refreshToken")?.value || "";
    const isLoggedIn = !!refreshToken;

    const restrictedPaths = ["/dashboard", "/dashboard/introductory",
        "/dashboard/player-dashboard", "/dashboard/bookmarked-videos",
        "/dashboard/profile", "/dashboard/search", "/subscription-plan"];
    const authPaths = ["/login"];

    // Static file handling (skip middleware for these)
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/static") ||
        pathname.endsWith(".png") ||
        pathname.endsWith(".jpg") ||
        pathname.endsWith(".woff2") ||
        pathname.endsWith(".css") ||
        pathname.endsWith(".js")
    ) {
        return NextResponse.next();
    }

    if (!isLoggedIn && restrictedPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // If logged in, prevent access to the login page
    if (isLoggedIn && authPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // If logged in, check subscription status
    if (isLoggedIn) {
        try {
            // Fetch user subscription status (Example API request)
            // const response = await fetch(`${request.nextUrl.origin}/api/user/subscription`, {
            //     headers: { Cookie: `refreshToken=${refreshToken}` },
            // });

            // const { hasSubscription } = await response.json();
            const hasSubscription = false;

            // If the user doesn't have a subscription, redirect to subscription page
            // if (!hasSubscription && pathname !== "/subscription-plan") {
            //     return NextResponse.redirect(new URL("/subscription-plan", request.url));
            // }

            // If user has a subscription and tries to access subscription page, redirect to dashboard
            if (hasSubscription && pathname === "/subscription-plan") {
                return NextResponse.redirect(new URL("/dashboard", request.url));
            }
        } catch (error) {
            console.error("Error checking subscription:", error);
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}
