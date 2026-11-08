import fs from 'fs';
import { parseMediaData, parseVideoData } from '../src/lib/parser';

console.log(parseMediaData(fs.readFileSync('src/data/music.yaml', 'utf8')));
console.log(parseVideoData(fs.readFileSync('src/data/videos.yaml', 'utf8')));
