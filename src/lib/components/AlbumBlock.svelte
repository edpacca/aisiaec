<script lang="ts">
	import type { MediaData } from "../types.ts";
    const { album }: { album: MediaData} = $props();

    const baseBandcampUrl = "https://bandcamp.com/EmbeddedPlayer"
    const embedConfig = "size=large/bgcol=333333/linkcol=4ec5ec/minimal=true/transparent=true/"
    const embedLink = `${baseBandcampUrl}/album=${album.embedId}/${embedConfig}`

</script>

<div class="album-block__container">
    <h2><a href={album.link}>{album.title}</a> {album.year}</h2>
    <iframe src={embedLink} loading="lazy"title={album.title} seamless>
        <a href={album.link}>{album.title} by All I See is an Empty Circle</a>
    </iframe>
</div>

<style>
    iframe {
        width: 80%;
        aspect-ratio: 1;
        border: 0;
    }

    a {
        text-decoration: none;
        color: var(--c-primary);
    }

    .album-block__container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
