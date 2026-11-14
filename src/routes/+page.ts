import { redirect } from '@sveltejs/kit';
import { resolve } from '$app/paths';

// "/" has no content of its own; the music page is the homepage.
// With adapter-static this prerenders to a meta-refresh redirect.
export function load() {
	redirect(307, resolve('/music'));
}
