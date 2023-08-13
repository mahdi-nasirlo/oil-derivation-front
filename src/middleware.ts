import type {NextRequest} from 'next/server'
import {NextResponse} from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const {pathname} = request.nextUrl

    const hasApiToken = request.cookies.has('authorization')

    if (pathname.startsWith('/dashboard') && !hasApiToken) {
        return NextResponse.rewrite(new URL('/login', request.url))
    }

    if (pathname.startsWith("/auth") && hasApiToken) {
        return NextResponse.rewrite(new URL('/dashboard'))
    }

}
