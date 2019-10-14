<template>
<div>
	<Nav />
	<main>
		<header>
			<h1>Apps</h1>
			<p>
				Applications made by students, for both competitions and the school curriculum
			</p>
		</header>
		<Filterbar />
		<ul class="gallery">
			<a v-for="app in apps" :href="'/apps/' + app.id">
				<li class="gallery-item" data-filterable="tags" :data-tags="app.PlatformsSupported + ',' + app.Year + ',' + app.Type">
					<img class="icon" :src="'http://localhost:8081'+app.Icon.url" /> <!-- TODO Set base url for images-->
					<div class="text">
						<h6>{{ app.Name }}</h6>
						<p>{{ app.Authors }}</p>
					</div>
					<div class="cover">
						{{ app.Description }}
					</div>
				</li>
			</a>
			<div v-if="Object.keys(apps).length === 0" class="gallery-item center" style="width: 100%">
				<h2>No apps published</h2>
			</div>
		</ul>
	</main>
	<!-- 
	<script src="/assets/js/filter.js"></script>
	<script src="/assets/js/filterbar.js"></script>
	<script>
		document.addEventListener("DOMContentLoaded", function() {
			var fb = new FilterBar(".filterbar", ".gallery");
		});
	</script> -->
	<Footer />
</div>
</template>

<script>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import Filterbar from '@/components/filterbar.vue'

export default {
	components: {
		Nav,
		Footer,
		Filterbar
	},
	async asyncData({
		$axios
	}) {
		const data = await $axios.$get('/apps')
		return {
			apps: data
		}
	}
}
</script>
