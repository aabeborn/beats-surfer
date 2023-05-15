import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Beats Surfer',
    description: 'Surf the beats like the ocean waves',
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* @ts-expect-error */}
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
