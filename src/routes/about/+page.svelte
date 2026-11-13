<script>
</script>

<svelte:head><title>About · AISIAEC</title></svelte:head>

<div class="img__container">
	<h1>All i see is AN eMptY ciRcle</h1>
	<div class="img__container">
		<img class="img-landscape" alt="the circle" src="/images/AISIAEC3_wide.webp" />
	</div>
</div>

<p class="display">
	<span class="bandname">AisiAec</span> have been playing music together in Edinburgh since 2015.
</p>
<p class="display">
	Often loud, sometimes quiet. Mostly instrumental and usually quite long. Something like
	progressive post-rock with a sprinkle of psychadelic doom.
</p>
<p class="display">It's hard to put <span class="bandname">The Circle</span> in a box.</p>

<hr />

<h2>Stories</h2>

<h3>
	<a
		href="https://www.theskinny.co.uk/music/music-videos/all-i-see-is-an-empty-circle-midnight-rugs-video-premiere"
		>The Skinny: Midnight Rugs (Video Premiere)</a
	>
</h3>
<p>
	<em>
		...Midnight Rugs, starts off as a beautiful piano lament, lulling you into a
		false sense of security before it explodes into big guitar licks, fuzzy riffs and pounding
		drums. With notes of psychedelia and math rock throughout, it strikes a fine balance between
		soft and hard and is a real ride of a track that's oozing with emotion.</em
	>
</p>
<p>
	In 2019 we shot a music video for one of our songs, Midnight Rugs. At the time, Edinburgh's <a
		href="https://www.pianodrome.org/">Pianodrome</a
	>
	project had set up for the first time in Leith Theatre, where Oli and some other friends in <a href="https://tinderboxcollective.org/">Tinderbox</a> had a residency. Coincidentally
	we also had pals at the
	<a href="https://edinburghforge.com/">Edinburgh Forge</a> where the prototype Pianodrome was built;
	now a circle of rotting piano corpses after many moons exposed to the elements.
</p>
<p>Our music video features both sites, flashing back and forth between them to visually accompany the epic journey of a track that is Midnight Rugs in a hallucinagenic whirlwind.</p>
<p>It's a bit silly but we had a lot of fun making it.</p>

<img
	class="img-portrait"
	alt="The circle recording the midnight rugs music video at the pianodrome"
	src="/images/pianodrome_v.webp"
/>

<style>
	.img__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}

	img.img-portrait,
	img.img-landscape {
		width: 100%;
	}

	h1 {
		color: var(--c-primary);
		position: absolute;
		top: 0;
		z-index: 2;
		font-size: 4em;
	}

	p {
		font-size: 1.2em;
		padding: 0.25em 1em;
		font-family: var(--f-sans);
	}

	p.display {
		text-transform: lowercase;
		font-family: var(--f-display);
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 3em;
		}
	}

	@media (max-width: 400px) {
		h1 {
			font-size: 2em;
		}
	}
</style>
