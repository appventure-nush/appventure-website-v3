<template>
<div>
	<Nav />
	<main class="page">
		<header>
			<h1>Contact AppVenture</h1>
		</header>
		<p>Have an app idea and need help bringing it into reality? <a href="/request">Get in touch</a></p>
		<!--TODO request-->

		<p>
			Enquiries? Email us at
			<a href="mailto:appventure@nushigh.edu.sg">appventure@nushigh.edu.sg</a>.
		</p>

		<p>
			For admission and general school hotlines, visit our
			<a href="http://www.nushigh.edu.sg/others/contact-us">school website</a>.
		</p>

		<iframe width="100%" height="320" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAHWozTKB6aHU5yfvsZBiOZOhesd9sgmJU&q=20+Clementi+Ave+1,+Singapore+129957" allowfullscreen></iframe>
	</main>
	<Footer />
</div>
</template>

<script>
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'

export default {
	components: {
		Nav,
		Footer
	}
}
</script>
