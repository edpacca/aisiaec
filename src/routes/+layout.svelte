<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav>
	<a href="/music" class:active={page.url.pathname === "/music"}>music</a>
	<a href="/video" class:active={page.url.pathname === "/video"}>video</a>
	<a href="/about" class:active={page.url.pathname === "/about"}>about</a>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		display: flex;
		align-items: center;
		gap: var(--gap);
		padding: 1rem 1.5rem;
		background: var(--c-surface);
		border-bottom: 1px solid var(--c-border);
		font-size: 0.875rem;
		font-weight: 500;
	}

	a {
		color: var(--c-muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	a:hover {
		color: var(--c-text);
	}

	a.active {
		color: var(--c-primary);
	}

	main {
		max-width: 48rem;
		margin: 0 auto;
		padding: 2.5rem 1.5rem;
	}
</style>
