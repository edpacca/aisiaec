import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// Outputs plain HTML/CSS to /build, deployable to any static host.
			// Unknown paths are handled by static/404.html (meta-refresh to /music).
			adapter: adapter(),
			// The site is served from the custom domain https://aisiaec.uk (see static/CNAME),
			// so it lives at the root. Set BASE_PATH='/aisiaec' to serve from
			// https://edpacca.github.io/aisiaec/ instead (and remove static/CNAME).
			paths: {
				base: (process.env.BASE_PATH ?? '') as '' | `/${string}`
			}
		})
	]
});
