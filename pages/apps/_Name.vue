<template>
<div>
	<Nav />
	<main class="page columns">
		<div class="column">
			<div v-if="app.Screenshots" class="carousel fullscreen" data-start="0">
				<ul class="carousel-items">
					<li v-for="(screenshot, index) in app.Screenshots" class="carousel-item" :class="{'active': index === 0}" :data-type='app.DisplayType' :data-href='imageURL+screenshot.url'>
						<img :src="imageURL+screenshot.url" />
					</li>
				</ul>
				<div class="carousel-badges">
					<ul class="carousel-badges-bar">
						<a v-for="(screenshot, index) in app.Screenshots" href="#" class="carousel-badge" :class="{'active': index === 0}" :data-index="index"></a>
					</ul>
				</div>
				<div class="carousel-overlay">
					<a href="#" class="button previous" data-index="-1"><i class="icon-navigate_before"></i></a>
					<a href="#" class="button next" data-index="+1"><i class="icon-navigate_next"></i></a>
				</div>
			</div>
			<div class="apps">
				<div v-if="app.Links">
					<a v-for="link in app.Links.split(',')" :href="link" class="link">
						<i class="icon-public"></i>
						<span>Visit website</span>
					</a>
				</div>
				<a v-if="app.PlaystorePackage" :href="'https://play.google.com/store/apps/details?id='+ app.PlaystorePackage" class="link">
					<i class="icon-shop"></i>
					<span>Get it on Google Play</span>
				</a>
				<a v-if="app.AppstoreUrl" :href="app.AppstoreUrl" class="link">
					<i class="icon-apple"></i>
					<span>Download on the App Store</span>
				</a>
				<a v-if="app.Downloads" v-for="download in app.Downloads" :href="imageURL + download.url" class="link" id="download">
					<i class="icon-get_app"></i>
					<span>Download</span>
				</a>
			</div>
		</div>
		<div class="column">
			<header>
				<h1>{{ app.Name }}</h1>
				<p>
					{{ app.PlatformsSupported }} / {{ app.Year }} / {{ app.Type }}
				</p>
				<p class="authors">
					{{ app.Authors }}
				</p>
				<div v-if="app.Achievements">
					<h6 class="achievement-header">Achievements</h6>
					<div class="achievements plain">
						{{ app.Achievements }}
					</div>
				</div>
			</header>
			<div class="content">
				{{ app.Content }}
			</div>
		</div>
	</main>
	<script src="/js/carousel.js"></script>
	<Footer />
</div>
</template>

<script>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'

export default {
	data() {
		return {
			imageURL: process.env.imageURL,
		}
	},
	components: {
		Nav,
		Footer
	},
	mounted() {
		var c = new Carousel(".carousel");
		c.autoplay();
	},
	async asyncData({
		$axios,
		route
	}) {
		const data = await $axios.$get('/apps?Name=' + route.params.Name)
		return {
			app: data[0]
		}
	}
}
</script>
