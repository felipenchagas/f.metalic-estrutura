import { NextResponse } from 'next/server'
import { GET as getNoticias } from '../sitemap-noticias.xml/route'

export const dynamic = 'force-dynamic'

export async function GET() {
    return getNoticias()
}