import {NextRequest, NextResponse} from 'next/server'
import {getToken} from 'next-auth/jwt'
import {withAuth} from 'next-auth/middleware'

async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const token = await getToken({req: request})
	const needsAuth = !(
		path.startsWith('/auth/') ||
		path.startsWith('/api/auth') ||
		path.startsWith('/_next') ||
		path.startsWith('/turbopack') ||
		path.endsWith('.ico') ||
		path.endsWith('.png') ||
		path.endsWith('.jpg')
	)
	if (!needsAuth) {
		if (token) return NextResponse.redirect(new URL(`/`, request.url))
        return null
    }

	if (needsAuth && !token) {
		const redirectTo = `${path}${request.nextUrl.search}`
		return NextResponse.redirect(new URL(`/auth/login?from=${encodeURIComponent(redirectTo)}`, request.url))
    }
}

async function authorized() {
	// This is a work-around for handling redirect on auth pages.
	// We return true here so that the middleware function above
	// is always called.
	return true
}

export default withAuth(middleware, {
	callbacks: {
		authorized
	}
})
