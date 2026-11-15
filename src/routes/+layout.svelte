<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header/>

<main class:about={page.url.pathname.includes('/about')}>
	{@render children()}
</main>

<Footer/>

<style>


	main {
		margin: 0 auto;
		text-align: center;
		padding: 1.5rem;
		max-width: 1600px;
	}

	.about {
		padding: 0;
	}

</style>
