import fs from 'fs';
import { parseMusicData, parseVideoData } from '../src/lib/parser';

console.log(parseMusicData(fs.readFileSync('src/data/music.yaml', 'utf8')));
console.log(parseVideoData(fs.readFileSync('src/data/videos.yaml', 'utf8')));
