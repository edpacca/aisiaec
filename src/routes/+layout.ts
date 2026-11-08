// Prerender every route to static HTML at build time.
export const prerender = true;

// Ship no client-side JS. With csr disabled on every page, SvelteKit skips the
// client build entirely, so data files and the YAML parser never reach /build.
export const csr = false;
