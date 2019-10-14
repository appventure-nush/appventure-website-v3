
# appventure-website

> Backstory: The current version of the website uses Go and Ponzu CMS. However, the request feature on the website has not been fully integrated with the website. Together with frequent bugs and complexity required in using Go, this lead to development issues and in the near future, issues for new developers. Hence, due to my obsession with using Javascript for everything web related, here we are.
o

AppVenture website v3 uses node.js with nuxt.js to implement a server side rendered webapp.

# Development

Requirements :

* Node.js

```bash
git clone git@github.com:appventure-nush/appventure-website-v3.git
cd appventure-website-v3
# install necessary packages
npm install
# install strapi globally
npm install strapi@alpha -g
# run frontend
npm run dev
# run strapi
cd cms
strapi run
```
