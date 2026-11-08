import YAML from 'yaml';
import type { MusicData, VideoData } from './types';

// Takes raw YAML text rather than a file path. Components import data files
// with Vite's `?raw` suffix (e.g. `import yaml from '../../data/music.yaml?raw'`)
// so the dev server reloads when a data file changes. This only runs during
// prerendering: csr is disabled (see routes/+layout.ts), so none of it ships.
export function parseYaml(text: string): unknown {
	return YAML.parse(text);
}

function isObject(v: unknown): v is Record<string, unknown> {
	return typeof v === 'object' && v !== null;
}

function hasBaseFields(v: Record<string, unknown>): boolean {
	return (
		typeof v.name === 'string' &&
		typeof v.link === 'string' &&
		typeof v.embedLink === 'string' &&
		(v.year === undefined || typeof v.year === 'number') &&
		(v.imgPath === undefined || typeof v.imgPath === 'string')
	);
}

function isMusicData(v: unknown): v is MusicData {
	return (
		isObject(v) && hasBaseFields(v) && (v.platform === 'spotify' || v.platform === 'bandcamp')
	);
}

function isVideoData(v: unknown): v is VideoData {
	return isObject(v) && hasBaseFields(v);
}

export function parseMusicData(text: string): MusicData[] {
	const data = parseYaml(text);
	if (!Array.isArray(data)) throw new Error('Music data must be an array');
	data.forEach((item, i) => {
		if (!isMusicData(item)) throw new Error(`Invalid music entry at index ${i}: ${JSON.stringify(item)}`);
	});
	return data;
}

export function parseVideoData(text: string): VideoData[] {
	const data = parseYaml(text);
	if (!Array.isArray(data)) throw new Error('Video data must be an array');
	data.forEach((item, i) => {
		if (!isVideoData(item)) throw new Error(`Invalid video entry at index ${i}: ${JSON.stringify(item)}`);
	});
	return data;
}
