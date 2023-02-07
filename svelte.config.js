import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Test comment
	kit: {
		adapter: adapter()
	}
};

export default config;
