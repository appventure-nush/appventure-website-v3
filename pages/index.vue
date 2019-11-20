<template>
<div>
	<Nav />
	<div class="jumbo-wrapper under invert">
		<section class="jumbo">
			<Campus />
			<div class="text">
				<h4>An adventure into the work of our CS students</h4>
				<ul class="links">
					<li class="link"><a class="btn" href="#trailer">Watch trailer</a></li>
					<li class="link"><a href="/apps">Browse apps</a></li>
				</ul>
				<div class="row">
					<a href="https://www.instagram.com/appventure_nush/" class="btn fa fa-instagram"></a>
					<a href="https://www.youtube.com/channel/UCBLSYkLt1hFDL7RL8rEeU0w/" class="btn fa fa-youtube"></a>
				</div>
			</div>
		</section>
	</div>
	<main>
		<header>
			<h1>Featured</h1>
		</header>
		<ul class="featured">
			<li v-for="(app,index) in apps" :class="{'reverse': index % 2 !== 0}" class="featured-item page columns">
				<div class="column">
					<div class="carousel animate" :class="['carousel-type-' + app.DisplayType, {'from-left': index % 2 === 0, 'from-right': index % 2 !== 0}]">
						<ul class="carousel-items">
							<li class="carousel-item active">
								<img :src="imageURL+app.Screenshots[0].url" />
							</li>
						</ul>
					</div>
				</div>
				<div class="column">
					<h1>{{ app.Name }}</h1>
					<p class="authors">{{ app.Authors }}</p>
					<div v-if="app.Achievements" class="achievements plain">{{ app.Achievements }}</div>
					<p>{{ app.Description }}</p>
					<a class="btn" :href="'/apps/'+ app.Name">Read more</a>
				</div>
			</li>
		</ul>
	</main>
	<script src="/js/scrollmanager.js"></script>
	<script src="/js/popup.js"></script>
	<Footer />
</div>
</template>

<script>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import Campus from '@/components/campus.vue'

export default {
	data() {
		return {
			imageURL: process.env.imageURL,
		}
	},
	mounted() {
		document.addEventListener("scroll", new ScrollManager().onScroll);
	},
	components: {
		Nav,
		Footer,
		Campus
	},
	async asyncData({
		$axios
	}) {
		const data = await $axios.$get('/apps?Featured=true')
		return {
			apps: data
		}
	}
}
</script>
