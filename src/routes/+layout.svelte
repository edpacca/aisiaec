<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav>
	<div class="navlinks__container">
		<a href="/music" class:active={page.url.pathname === '/music'}>Music</a>
		<a href="/video" class:active={page.url.pathname === '/video'}>Video</a>
		<a href="/about" class:active={page.url.pathname === '/about'}>About</a>
	</div>
</nav>

<main class:about={page.url.pathname === '/about'}>
	{@render children()}
</main>

<footer>
	<hr />
	<div class="contact__container">
		<h2>Contact</h2>
		<a href="mailto:alliseeisanemptycircle@gmail.com">alliseeisanemptycircle@gmail.com</a>
	</div>
</footer>

<style>
	nav {
		padding: 1rem 1.5rem;
		background: var(--c-surface);
		border-bottom: 1px solid var(--c-border);
		font-size: 0.875rem;
		font-weight: 500;
	}

	.navlinks__container {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-around;
		gap: var(--gap);
		max-width: 500px;
	}

	a {
		color: var(--c-muted);
		text-decoration: none;
		transition: color 0.15s;
		font-size: 1.5rem;
	}

	a:hover {
		color: var(--c-text);
	}

	a.active {
		color: var(--c-primary);
	}

	main {
		margin: 0 auto;
		text-align: center;
		padding: 1.5rem;
		max-width: 1600px;
	}

	.about {
		padding: 0;
	}

	.contact__container {
		padding: 1.5em;

		h2 {
			color: var(--c-primary);
			margin-bottom: 0.25em;
		}

		a {
			font-size: 1em;
			font-family: var(--f-sans);
		}

	}
</style>
