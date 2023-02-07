import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Test
	kit: {
		adapter: adapter()
	}
};

export default config;
