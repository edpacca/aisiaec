<script lang="ts">
	import { parseMediaData } from '../../lib/parser.ts';
	import videoYaml from '../../data/videos.yaml?raw';
	import VideoBlock from './VideoBlock.svelte';

	const videos = parseMediaData(videoYaml);
</script>


{#each videos as video}
	<VideoBlock video={video}/>
{/each}
