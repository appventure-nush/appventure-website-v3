<template>
<div>
	<!--
		"Together we can change the world" - tt4158110
	-->
	<div class="navigation-wrapper" v-bind:class="{ over: Jumbo}">
		<nav class="navigation" v-bind:class="{ invert: Jumbo}">
			<div class="brand">
				<a href="/" title="Home">
					<span class="name">AppVenture<small> by NUS High</small></span>
				</a>
			</div>
			<input class="menu icon-menu" type="checkbox" />
			<ul class="links">
				<li class="link"><a href="/about">About</a></li>
				<li class="link"><a href="/apps">Apps</a></li>
				<li class="link"><a href="/projects">Projects</a></li>
				<li class="link"><a href="/request">Request</a></li>
			</ul>
		</nav>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			Jumbo: true
		}
	}
}
</script>
