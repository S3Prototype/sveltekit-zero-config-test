import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Added adapter auto to package.json
	kit: {
		adapter: adapter({
			split: true
		})
	}
};

export default config;
