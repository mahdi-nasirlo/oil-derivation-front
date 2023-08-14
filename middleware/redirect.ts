import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";

export function redirectMiddleware(middleware: NextMiddleware) {

    return async (request: NextRequest, event: NextFetchEvent) => {

        const pathname = request.nextUrl.pathname

        const hasApiToken = request.cookies.has('accessToken')

        if (pathname.startsWith('/dashboard') && !hasApiToken) {
            return NextResponse.rewrite(new URL('/auth/login', request.url))
        }

        if (pathname.startsWith("/auth") && hasApiToken) {
            return NextResponse.rewrite(new URL('/dashboard', request.url))
        }

        return middleware(request, event)
    }

}