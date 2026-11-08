<script lang="ts">
	import { parseMediaData } from '../parser';
	import musicYaml from '../../data/music.yaml?raw';
	import MusicBlock from './AlbumBlock.svelte';

	const albums = parseMediaData(musicYaml).sort((a, b) => (b.year - a.year));
</script>


{#each albums as album}
	<MusicBlock album={album}/>
{/each}
