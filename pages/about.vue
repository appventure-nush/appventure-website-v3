<template>
<div>
	<Nav />
	<main class="page">
		<header>
			<h1>About AppVenture</h1>
		</header>

		<p>
			AppVenture is a community consisting of passionate students from NUS High. We develop a wide range of apps to benefit staff
			and students from NUS High.
		</p>

		<p>
			This website showcases outstanding CS projects done by students from NUS High. These apps are handpicked by staff and range
			from small utility apps to award-winning projects. AppVenture aims to recognise the efforts students have put into their
			projects, and at the same time publicise the apps to those who may find them useful. Take a look to see what we are doing at
			NUS High!
		</p>

		<h1>The Team</h1>

		<div class="profile">
			<img class="picture" title="Ambrose's Best Friend" alt="Ambrose's Best Friend" src="/images/ambrosesbestfriend.jpg" />
			<div class="text">
				<h2>Wayne Tee</h2>
				<p>
					Wayne believes in using technology to make life better. Interested in everything from cryptography to web development,
					Wayne looks forward to the exciting world ahead. He is also Ambrose's best friend.
				</p>
			</div>
		</div>

		<div class="profile">
			<img class="picture" title="Wayne's Best Friend" alt="Wayne's Best Friend" src="/images/waynesbestfriend.jpg" />
			<div class="text">
				<h2>Ambrose Chua</h2>
				<p>
					Ambrose started programming when he first went into robotics but went on to learn Python. He started his adventures in
					building websites and used to run them from a laptop at home, but since then has upgraded. He loves anything computerish.
					He is also Wayne's best friend.
				</p>
			</div>
		</div>
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
