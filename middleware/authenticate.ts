import type {NextFetchEvent, NextMiddleware, NextRequest} from 'next/server'
import {NextResponse} from "next/server";

export function authenticateMiddleware(middleware: NextMiddleware) {

    return async (request: NextRequest, event: NextFetchEvent) => {

        const params = request.nextUrl.searchParams

        const nextUrl = request.nextUrl

        if (params.has('code')) {

            try {
                const token = await getToken(request, params.get('code') || '', request.nextUrl.origin + request.nextUrl.pathname);

                console.log("ldfkjaslkj")
                if (token) {

                    const response = NextResponse.next();

                    response.cookies.set("accessToken", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        sameSite: "strict",
                        maxAge: 60 * 60,
                        // path: request.url,
                    });

                    return response;
                }


            } catch (error) {
                console.error('Error obtaining token:', error);
            }
        }

        return middleware(request, event)
    }

}

export async function getToken(request: NextRequest, code: string, redirectUrl: string) {

    let data = {
        "code": code,
        "RedirectUri": redirectUrl
    }

    console.log(data)

    const response = await fetch(`${process.env['NEXT_PUBLIC_API_URL']}/security/getToken`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log(responseData)
    return responseData.data?.access_token
}