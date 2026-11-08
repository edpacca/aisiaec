<script lang="ts">
	import { parseVideoData } from '#lib/parser';
	import videoYaml from '../../data/videos.yaml?raw';

	const videos = parseVideoData(videoYaml);
</script>
