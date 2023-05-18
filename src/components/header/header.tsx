import {getServerSession} from 'next-auth'
import {config as authOptions} from '@/lib/auth'
import Navigation from './components/navigation'


export default async function Header() {
	const session = await getServerSession(authOptions)
	return (
		<header className="w-full inline-flex justify-between items-center">
            <Navigation/>
			
		</header>
	)
}
