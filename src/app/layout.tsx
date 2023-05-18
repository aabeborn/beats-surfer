import {cn} from '@/lib/utils'

import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'Beats Surfer',
	description: 'Surf the beats like the ocean waves',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png'
	}
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body
				className={cn(
					inter.className,
					'bg-background flex flex-col justify-between items-center px-3 py-8'
				)}
			>
				{children}
			</body>
		</html>
	)
}
