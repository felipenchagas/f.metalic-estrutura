import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { baseMetadata, getGlobalSchemaGraph } from '@/lib/seo'
import GeoCoreTracker from '@/components/GeoCoreTracker'

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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18375153646"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18375153646');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <GeoCoreTracker />
        {children}
      </body>
    </html>
  )
}
