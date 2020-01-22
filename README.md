# starjobs2.0

#### It is still in development process

## A Jobstreet like website 
 - where you can register as an applicant to search for available jobs and search company profiles
 - or register as an employer to post a job and search for applicants
 - [Click here to view in browser](https://starjobs.web.app) 
 
### Project Development Description
 - it is a SPA (Single Page Application) Website, it takes a while to load in initial loading of the website
 - but it is fast and provide better experience for the user. it doesnt need to refresh the page to load new data. 
 - its design is built in Mobile First Design approach. Responsive to any screen sizes
 
### Technology Used
```
 - Vuejs (Vuex, VueRouter, Vuefire, VueStore)
 - Vuetify
 - Google Firebase for back end
```

### DRAWBACKS
 - Vuejs is SPA in default so its HTML file are generated by JavaScript and Render it in Client Side. it is not a good practice for doing SEO (Search Engine Optimization).
 - Google Crawlers (Bots) are doesn't wait for the html to be generated Asynchronously so that google doesn't index its pages.
 
### Current Resolution
 - i will be using Nuxt.js to handle CSR(Client Side Rendering) and SSR(Server Side Rendering) to make it Universal/isomorphic. For satisfying the Google Bot Crawlers and other Search Engine.

 
