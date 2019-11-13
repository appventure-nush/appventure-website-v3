
# Appventure Website Version 3

> Backstory: The current version of the website uses Go and Ponzu CMS. However, the request feature on the website is not fully integrated with the website. With frequent bugs and the complexity of using Go, it lead to development issues and may result in issues for new developers in the future. Hence, due to my obsession with using Javascript for everything web related, here we are.

AppVenture website v3 uses [node.js](https://nodejs.org/en/) with [nuxt.js](https://nuxtjs.org/) to implement a server side rendered webapp. It also uses [Strapi](https://strapi.io/) for the content management system.

# Development

Requirements :

* [Node.js](https://nodejs.org/en/)

```bash
git clone git@github.com:appventure-nush/appventure-website-v3.git
cd appventure-website-v3
# install necessary packages
npm install
# install strapi globally
npm install strapi@alpha -g
# run frontend
npm run dev
# compile scss
npm run scss
# run strapi
cd cms
strapi run
```
