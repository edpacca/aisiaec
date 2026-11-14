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
			// GitHub Pages serves this repo at https://edpacca.github.io/aisiaec/,
			// so production builds need the repo name as a base path. `vite dev`
			// keeps serving from the root. Set BASE_PATH='' if you move to a custom domain.
			paths: {
				base: process.argv.includes('dev')
					? ''
					: ((process.env.BASE_PATH ?? '/aisiaec') as '' | `/${string}`)
			}
		})
	]
});
