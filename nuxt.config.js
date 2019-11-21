//TODO {{ if .Title }} {{ .Title }} - AppVenture {{ else if .Item }} {{ .Item.Name }} - AppVenture {{ else }} AppVenture {{ end }}

export default {
	build: {
		env: {
			apiUrl: 'http://localhost:8081',
			imageURL: 'https://appventure.nushigh.edu.sg'
		}
	},
	env: {
		apiUrl: process.env.API_URL || 'http://localhost:8081',
		imageURL: process.env.IMAGE_URL || 'http://localhost:8081'
	},
	modules: [
		'@nuxtjs/axios'
	],
	axios: {
		baseURL: process.env.API_URL || 'http://localhost:8081'
	},
	head: {
		titleTemplate: 'Appventure',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width'
			},
			{
				name: 'author',
				cotent: 'NUS High School of Math and Science'
			},
			{
				name: 'theme-color',
				cotent: '#009A90'
			},
		],
		script: [{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
		}],
		link: [{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700'
			},
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
			},
			{
				rel: 'shortcut icon',
				type: 'image/png',
				href: '/icons/favicon.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/icons/favicon.png'
			}
		]
	},
	css: [
		'~assets/icomoon/style.css',
		'~assets/css/style.css'
	]
}