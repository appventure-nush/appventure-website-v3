<template>
<div>
	<Nav />
	<main class="page projects">
		<header>
			<h1>Appventure Projects</h1>
			<p>
				Student made projects that improve the quality of life of those in school as well as the community
			</p>
		</header>
		<a v-for="project in projects" class="project" :href="'/projects/' + project.Name">
			<img class="image" style="max-width:100%;max-height:200px;" :src="imageUrl+project.DisplayImage.url" />
			<div class="content">
				<h2>{{ project.Name }}</h2>
				<div class="summary">{{ project.ShortDescription }}</div>
				<p class="authors">By {{ project.Authors }}</p>
			</div>
		</a>
	</main>
	<Footer />
</div>
</template>

<script>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import Filterbar from '@/components/filterbar.vue'

export default {
	data() {
		return {
			imageUrl: process.env.imageURL,
		}
	},
	components: {
		Nav,
		Footer
	},
	async asyncData({
		$axios
	}) {
		const data = await $axios.$get('/projects')
		return {
			projects: data
		}
	}
}
</script>
