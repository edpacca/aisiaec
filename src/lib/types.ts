export interface MusicData {
	name: string;
	platform: 'spotify' | 'bandcamp';
	/** Direct link to the release page */
	link: string;
	/** URL used as the iframe src */
	embedLink: string;
	year?: number;
	imgPath?: string;
}

export interface VideoData {
	name: string;
	/** Direct YouTube link, e.g. https://www.youtube.com/watch?v=... */
	link: string;
	/** Embed URL, e.g. https://www.youtube.com/embed/... */
	embedLink: string;
	year?: number;
	imgPath?: string;
}
