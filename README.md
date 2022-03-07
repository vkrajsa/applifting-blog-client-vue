# applifting blog in vue

## Live demo

```
https://applifting.vojtechkrajsa.cz

testing credentials:
username: testvojta
password: 12345
```

## Goals that I set for myself to accomplish

✅ Build the app with Vue.js options API with all features.

- I didn't manage to do the filters on Admin dashboard, I did pagination instead

✅ Experiment with Composition API and rewrie at least one component to Composition API.

- In the end whole app had to be in Composition API, since it has much better support for typescript. This sapped more time than I thought :)

✅ Integrate Typescript with Vue 3 and lose typescript virginity (since its my first exposure, I will limit myself to use the basic Types and experiment along the way).

- I dived into TS for 2 days and then used what I learned as best as I could. Since I knew only basic patterns, I made lot of shortcuts using any, sometimes omitting types at all. There is big room for improvement there,

❌ Write unit test for most critical features and try E2E testing with Cypress

- There is exactly one unit test for Login component, then I realized that time is running...

❌ If there is extra time (Already I feel there won't be enough), I would try to convert the project to Nuxt.js. Something that would make sense to do from the start since blog should be SEO friendly and some pre rendering needs to happen. Learning new framework would be bit of a strech now so I keep it as very optional.

- It would mean to rewrite the app completelly, this was too optimistic.

## Known bugs

- [ ] WebSocket implementation is done poorly. I am using REST to post comment resources and I am listening for changes with WS, it results to delay and poor UI experience. I would implement comments with WS completely from scratch.
- [ ] User should be automatically logged out after token expiration, since there is no refresh token.
- [ ] I don't handle case when async request is interrupted by user navigation off the page before its finished.
- [ ] I am not handling certain errors - if image is not found on article. There should be also some error handling for internal errors in the app , Vue has
- [ ] If user uploads image and then refreshes the page without submitting form, image is uploaded without any article relation, this could be fixed by deleting the image from server in unmounted hook.

## Things that could be improved

- [ ] Prerendering the app for better SEO performacen, which can be done with vue https://vuejs.org/guide/scaling-up/ssr.html but Nuxt.js would be choice here.
- [ ] Adding meta tags, image alts and basic accessabilitys
- [ ] 404 page , 204 article no longer exists
- [ ] Adding more form validaiton, I am using browser required validation only.
- [ ] There is lot of fetching a refetching of articles, article details etc. It would probably make sense to utilize store. Instead I have used composable functions that have no persistency.
- [ ] There is lot of repetation in composable functions and service functions, there could be some general useFetch method, that would include api call, loader, error etc.
- [ ] Sanitize markdown HTLM input
- [ ] Not all features on MarkDown editor work since its not connected to marked plugin which I am using for parsing markdown. Probably would use different markdown editor plugin.
- [ ] Token security - I am storing toke in localStorage, it could be store in session or http cookie if possible. I am not sure what is the best case though.

## Scripts

```
`npm run serve` to start localhost server

`npm run build` to build app into dist folder

```
