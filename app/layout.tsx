import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { baseMetadata, getGlobalSchemaGraph } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getGlobalSchemaGraph()) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
