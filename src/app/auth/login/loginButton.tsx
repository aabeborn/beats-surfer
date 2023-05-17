'use client'

import {signIn} from 'next-auth/react'

import {Button} from '@/components/button/button'

export default function LoginButton() {
	return (
		<Button onClick={() => signIn('spotify')}>
			{' '}
			Sign in with Spotify{' '}
		</Button>
	)
}
