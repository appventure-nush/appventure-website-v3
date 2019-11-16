<template>
<div class="footer-wrapper">
	<footer class="footer">
		<div class="column">
			<div class="group">
				<a href="http://www.nushigh.edu.sg"><img src="/images/nushigh.svg" title="Visit school website" width="146" /></a>
			</div>
		</div>
		<div class="column">
			<div class="group">
				<ul class="links">
					<li class="link"><a href="/">Home</a></li>
					<li class="link"><a href="/apps">Apps</a></li>
					<li class="link"><a href="/projects">Projects</a></li>
					<li class="link"><a href="/about">About</a></li>
					<li class="link"><a href="/contact">Contact</a></li>
				</ul>
			</div>
			<div class="group">
				<ul class="links">
					<li class="link"><a href="/request">Request an app</a></li>
				</ul>
			</div>
			<div class="group">
				<ul class="links">
					<li class="link">
						<a href="//maps.google.com/?q=20+Clementi+Ave+1,+Singapore+129957" title="Open address in Google Maps"><address>20 Clementi Ave 1, Singapore 129957</address></a>
					</li>
				</ul>
			</div>
			<div class="group">
				<small>Hand-crafted by <a href="https://ambrose.makerforce.io/">Ambrose</a> and Wayne. </small>
			</div>
		</div>
	</footer>
</div>
</template>

<script>
export default {
	methods: {
		GoogleAnalytics: function() {
			(function(i, s, o, g, r, a, m) {
				i["GoogleAnalyticsObject"] = r;
				(i[r] =
					i[r] ||
					function() {
						(i[r].q = i[r].q || []).push(arguments);
					}),
				(i[r].l = 1 * new Date());
				(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m);
			})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");

			ga("create", "UA-92085726-1", "auto");
			ga("send", "pageview");
		}
	},
	beforeMount() {
		this.GoogleAnalytics()
	},
}
</script>
