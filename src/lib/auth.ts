import {AuthOptions} from 'next-auth'
import {OAuthUserConfig} from 'next-auth/providers'
import SpotifyProvider, {SpotifyProfile} from 'next-auth/providers/spotify'

const spotify: OAuthUserConfig<SpotifyProfile> = {
	clientId: process.env.SPOTIFY_ID,
	clientSecret: process.env.SPOTIFY_SECRET
}

export const config: AuthOptions = {
	providers: [SpotifyProvider(spotify)],
	pages: {
		signIn: '/auth/login'
	}
}
