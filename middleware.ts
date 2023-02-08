import { geolocation } from '@vercel/edge';

const BLOCKED_COUNTRY = 'US';

export const config = {
	// Only run the middleware on the example route
	matcher: '/example'
};

export default function middleware(request: Request): Response {
	const url = new URL(request.url);

	const { country } = geolocation(request);
	// You can also get the country using dot notation on the function
	// const country = geolocation(request).country;

	if (country === BLOCKED_COUNTRY) {
		url.pathname = '/about';
		// Return a new redirect response
		return Response.redirect(url);
	}

	url.pathname = '/';
	return Response.redirect(url);
}
