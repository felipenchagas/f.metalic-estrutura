import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
    // Await the asynchronous cookies() API
    const cookieStore = await cookies()
    cookieStore.delete('admin_auth')

    // Optional: Return minimal text or json indicating success
    return NextResponse.json({ success: true, message: 'Logout successful' })
}
