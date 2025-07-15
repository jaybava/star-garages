import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/lib/metadata'
import './globals.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

const geist = Geist({
    subsets: ['latin'],
})

export const metadata: Metadata = siteConfig

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://link.leadxpert.io/js/form_embed.js" async></script>
            </head>
            <body className={`min-h-screen bg-background font-sans antialiased ${geist.className}`}>
                <Header />
                <main className="relative flex min-h-screen flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
