import {cn} from '@/lib/utils'
import Header from '@/components/header/header'

export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<>
			{/* @ts-expect-error */}
			<Header />
			{children}
		</>
	)
}
