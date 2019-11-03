<template>
<div>
	<Nav />
	<main class="page">
		<header>
			<h1>Request an app</h1>
		</header>

		<p>
			We want to hear your app ideas! If you have an idea you need help bringing into reality, fill in the form below and we will
			get back to you!
		</p>

		<form class="request" action="/request/send" method="post">
			<!-- TODO request -->
			<input class="form-control" type="text" name="title" required placeholder="Title" />
			<textarea class="form-control" rows="6" name="desc" required placeholder="Description"></textarea>
			<input class="form-control" type="text" name="name" placeholder="Name" required />
			<input class="form-control" type="text" name="email" placeholder="Email" required />
			<input class="btn" type="submit" value="Send" />
		</form>
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
