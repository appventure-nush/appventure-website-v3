<template>
<div>
	<Nav />
	<main class="page">
		<header>
			<h1>{{ project.Name }}</h1>
			<p class="authors">
				{{ project.Authors }}
			</p>
		</header>
		<div class="content">
			{{ project.Content }}
		</div>
		<div class="carousel fullscreen" data-start="0">
			<ul class="carousel-items">
				<li v-for="(photo, index) in project.Photos" class="carousel-item" :class="{'active': index === 0}" data-type="raw" :data-href='imageURL+photo.url'>
					<img :src="imageURL+photo.url" /> <!-- TODO data-type -->
				</li>
			</ul>
			<div class="carousel-badges">
				<ul class="carousel-badges-bar">
					<a v-for="(photo, index) in project.Photos" href="#" class="carousel-badge" :class="{'active': index === 0}" :data-index="index"></a>
				</ul>
			</div>
			<div class="carousel-overlay">
				<a href="#" class="button previous" data-index="-1"><i class="icon-navigate_before"></i></a>
				<a href="#" class="button next" data-index="+1"><i class="icon-navigate_next"></i></a>
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
		const data = await $axios.$get('/projects?Name=' + route.params.Name)
		return {
			project: data[0]
		}
	}
}
</script>
