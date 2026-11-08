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
			// Outputs plain HTML/CSS/JS to /build, deployable to any static host.
			// fallback: SPA shell served by the host for unknown paths, so the
			// [...rest] catch-all route can redirect them to /music.
			adapter: adapter({ fallback: '404.html' })
		})
	]
});
