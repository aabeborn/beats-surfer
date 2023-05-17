import {AuthOptions, Awaitable, Session} from 'next-auth'
import {JWT} from 'next-auth/jwt'
import {OAuthUserConfig} from 'next-auth/providers'
import SpotifyProvider, {SpotifyProfile} from 'next-auth/providers/spotify'

const spotify: OAuthUserConfig<SpotifyProfile> = {
	clientId: process.env.SPOTIFY_ID,
	clientSecret: process.env.SPOTIFY_SECRET
}

interface SessionWithToken extends Session {
	access_token?: string
}

interface Jwt extends JWT {
	access_token?: string
}

export const config: AuthOptions = {
	providers: [SpotifyProvider(spotify)],
	pages: {
		signIn: '/auth/login'
	},
	callbacks: {
		async jwt({token, account}): Promise<Jwt> {
			const res = token
			if (account?.access_token) {
				res.access_token = account.access_token
			}
			return res
		},
		async session({
			session,
			token
		}: {
			session: Session
			token: Jwt
		}): Promise<SessionWithToken> {
			const res: SessionWithToken = session
			res.access_token = token.access_token
			return res
		}
	}
}
