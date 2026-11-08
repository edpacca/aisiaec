<script lang="ts">
	import type { MediaData } from '../types.ts';
	const { video }: { video: MediaData } = $props();

	const baseYoutubeUrl = 'https://www.youtube.com';
	const link = `${baseYoutubeUrl}/watch?v=${video.embedId}`;
	const embedLink = `${baseYoutubeUrl}/embed/${video.embedId}`;
</script>

<div class="video-block__container">
	<h2><a href={link}>{video.title}</a></h2>
	{#if video.description}
		<p>{video.description}</p>
	{/if}
	<iframe src={embedLink} loading="lazy" title={video.title} seamless>
		<a href={link}>{video.title} by All I See is an Empty Circle</a>
	</iframe>
</div>
<hr/>

<style>
	iframe {
		width: 80%;
		aspect-ratio: 16 / 9;
		border: 0;
	}

	a {
		text-decoration: none;
		color: var(--c-primary);
	}

	.video-block__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
        margin-bottom: 1em;
	}

    p {
        margin: 0;
        text-transform: lowercase;
        font-style: italic;
    }

    h2 {
        margin-bottom: 0;
    }
</style>
