import defaultlDecorate from '/libs/blocks/eddys-video/eddys-video.js';

console.log('video component');

export default async function decorate(block) {
    await defaultlDecorate(block);
}