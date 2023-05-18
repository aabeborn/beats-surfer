'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CompassIcon, HomeIcon, LibraryIcon} from 'lucide-react'

import {Button} from '../../button/button'

const routes = [
	{
		name: 'Home',
		link: '/',
		icon: HomeIcon
	},
	{
		name: 'Explore',
		link: '/explore',
		icon: CompassIcon
	},
	{
		name: 'Library',
		link: '/library',
		icon: LibraryIcon
	}
]
export default function Navigation() {
	const path = usePathname()
    console.log(path)
	return (
		<nav className="inline-flex gap-4">
			{routes.map(({name, link, icon}, index) => (
				<Link
					href={link}
					key={index}
				>
					<Button
						active={path === link}
						variant="link"
						icon={icon}
					>
						{name}
					</Button>
				</Link>
			))}
		</nav>
	)
}
