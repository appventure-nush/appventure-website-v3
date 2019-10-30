<template>
<div>
	<Nav />
	<main class="page projects">
		<header>
			<h1>Projects</h1>
			<p>
				Student made projects that improve the quality of life of those in school as well as the community
			</p>
		</header>
		<a v-for="project in projects" class="project" :href="'/projects/' + project.Name">
			<img :src="apiUrl+project.Displayimage.url" />
			<div>
				<h2>{{ project.Name }}</h2>
				<div class="summary">
					{{ project.Summary }}
				</div>
				<p class="authors">By {{ project.Authors }}</p>
			</div>
		</a>
		<div class="project center">
			<h2>No projects published</h2>
		</div>
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
			apiUrl: process.env.apiUrl,
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
