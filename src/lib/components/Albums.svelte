<script lang="ts">
	import { parseMusicData } from '#lib/parser';
	import musicYaml from '../../data/music.yaml?raw';

	const albums = parseMusicData(musicYaml);
</script>
