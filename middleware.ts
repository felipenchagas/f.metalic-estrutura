import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Only protect /admin routes
    if (!pathname.startsWith('/admin')) return NextResponse.next()

    // Allow login and logout through without auth check
    if (pathname === '/admin/login' || pathname.startsWith('/admin/logout')) {
        return NextResponse.next()
    }

    // Check auth cookie
    const auth = req.cookies.get('admin_auth')?.value
    const password = process.env.ADMIN_PASSWORD

    if (!password || auth !== password) {
        const loginUrl = new URL('/admin/login', req.url)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
