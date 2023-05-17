import {Pacifico} from 'next/font/google'
import Image from 'next/image'

import {cn} from '@/lib/utils'

import LoginButton from './loginButton'

const pacifico = Pacifico({weight: '400', subsets: ['latin']})

export default function LoginPage() {
	return (
		<main className="w-full h-full bg-background relative inline-flex items-center">
			<div className="w-full h-full absolute t-0 l-0  z-0">
				<Image
					src="/login/landing.jpg"
					className="object-cover"
					fill={true}
					alt="landing"
				/>
			</div>
			<section className="grow h-full flex items-center justify-center z-10">
				<div className="bg-foreground rounded-xl p-8 flex flex-col items-center gap-8 md:inline-flex md:flex-row">
					<div className="flex flex-col items-center">
						<Image
							src="/logo.png"
							width={240}
							height={70}
							alt="logo"
						/>
						<span
							className={cn(
								pacifico.className,
								'text-sm text-accent mt-2 md:mb-8'
							)}
						>
							Surf the beats like the ocean waves
						</span>
						<Image
							src="/login/auth.png"
							width={200}
							height={200}
							alt="auth"
							className="block md:hidden mt-8 mb-12"
						/>
						<LoginButton />
					</div>
					<Image
						src="/login/auth.png"
						width={300}
						height={300}
						alt="auth"
						className="hidden md:block"
					/>
				</div>
			</section>
		</main>
	)
}
