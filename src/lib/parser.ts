import YAML from 'yaml';
import type { MediaData } from './types';

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

function hasMediaDataFields(v: Record<string, unknown>): boolean {
	return (
		typeof v.title === 'string' &&
		typeof v.link === 'string' &&
		typeof v.embedId === 'string' &&
		(v.year === undefined || typeof v.year === 'number') &&
		(v.imgPath === undefined || typeof v.imgPath === 'string') &&
		(v.description === undefined || typeof v.description === 'string')
	);
}

function isMediaData(v: unknown): v is MediaData {
	return isObject(v) && hasMediaDataFields(v);
}

export function parseMediaData(text: string): MediaData[] {
	const data = parseYaml(text);
	if (!Array.isArray(data)) throw new Error('Media data must be an array');
	data.forEach((item, i) => {
		if (!isMediaData(item)) throw new Error(`Invalid media entry at index ${i}: ${JSON.stringify(item)}`);
	});
	return data;
}
