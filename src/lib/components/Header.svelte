<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Title from './Title.svelte';
</script>

<nav>
	<div class="title__container">
		<Title />
	</div>
	<div class="navlinks__container">
		<a href={resolve('/music')} class:active={page.url.pathname.includes('/music')}> Music </a>
		<a href={resolve('/video')} class:active={page.url.pathname.includes('/video')}> Video </a>
		<a href={resolve('/about')} class:active={page.url.pathname.includes('/about')}> About </a>
	</div>
</nav>

<style>
	nav {
		padding: 1rem 1.5rem;
		background: var(--c-surface);
		border-bottom: 1px solid var(--c-border);
		font-size: 0.875rem;
		font-weight: 500;
		display: flex;
		flex-direction: column;
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
        text-shadow: 1px 1px 2px black;
	}

	a:hover {
		color: var(--c-text);
	}

	a.active {
		color: var(--c-primary);
		text-shadow:
			1px 1px 2px white,
			0 0 1em var(--c-primary),
			0 0 0.2em var(--c-primary);
	}

	@media screen and (max-width: 440px) {
		a {
			font-size: 1rem;
		}
	}
</style>
