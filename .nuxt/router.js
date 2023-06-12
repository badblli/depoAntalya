import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5212b36e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _1ab06441 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _71ca8e33 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4d5326f0 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _cfb6631a = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _2f3cfe46 = () => interopDefault(import('..\\pages\\get-in-touch.vue' /* webpackChunkName: "pages/get-in-touch" */))
const _fdb4d598 = () => interopDefault(import('..\\pages\\maintenance.vue' /* webpackChunkName: "pages/maintenance" */))
const _751f9ce7 = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5212b36e,
    name: "about___tr"
  }, {
    path: "/contact",
    component: _1ab06441,
    name: "contact___tr"
  }, {
    path: "/de",
    component: _71ca8e33,
    name: "index___de"
  }, {
    path: "/en",
    component: _71ca8e33,
    name: "index___en"
  }, {
    path: "/events",
    component: _4d5326f0,
    name: "events___tr"
  }, {
    path: "/gallery",
    component: _cfb6631a,
    name: "gallery___tr"
  }, {
    path: "/get-in-touch",
    component: _2f3cfe46,
    name: "get-in-touch___tr"
  }, {
    path: "/maintenance",
    component: _fdb4d598,
    name: "maintenance___tr"
  }, {
    path: "/pricing",
    component: _751f9ce7,
    name: "pricing___tr"
  }, {
    path: "/ru",
    component: _71ca8e33,
    name: "index___ru"
  }, {
    path: "/uk",
    component: _71ca8e33,
    name: "index___uk"
  }, {
    path: "/de/about",
    component: _5212b36e,
    name: "about___de"
  }, {
    path: "/de/contact",
    component: _1ab06441,
    name: "contact___de"
  }, {
    path: "/de/events",
    component: _4d5326f0,
    name: "events___de"
  }, {
    path: "/de/gallery",
    component: _cfb6631a,
    name: "gallery___de"
  }, {
    path: "/de/get-in-touch",
    component: _2f3cfe46,
    name: "get-in-touch___de"
  }, {
    path: "/de/maintenance",
    component: _fdb4d598,
    name: "maintenance___de"
  }, {
    path: "/de/pricing",
    component: _751f9ce7,
    name: "pricing___de"
  }, {
    path: "/en/about",
    component: _5212b36e,
    name: "about___en"
  }, {
    path: "/en/contact",
    component: _1ab06441,
    name: "contact___en"
  }, {
    path: "/en/events",
    component: _4d5326f0,
    name: "events___en"
  }, {
    path: "/en/gallery",
    component: _cfb6631a,
    name: "gallery___en"
  }, {
    path: "/en/get-in-touch",
    component: _2f3cfe46,
    name: "get-in-touch___en"
  }, {
    path: "/en/maintenance",
    component: _fdb4d598,
    name: "maintenance___en"
  }, {
    path: "/en/pricing",
    component: _751f9ce7,
    name: "pricing___en"
  }, {
    path: "/ru/about",
    component: _5212b36e,
    name: "about___ru"
  }, {
    path: "/ru/contact",
    component: _1ab06441,
    name: "contact___ru"
  }, {
    path: "/ru/events",
    component: _4d5326f0,
    name: "events___ru"
  }, {
    path: "/ru/gallery",
    component: _cfb6631a,
    name: "gallery___ru"
  }, {
    path: "/ru/get-in-touch",
    component: _2f3cfe46,
    name: "get-in-touch___ru"
  }, {
    path: "/ru/maintenance",
    component: _fdb4d598,
    name: "maintenance___ru"
  }, {
    path: "/ru/pricing",
    component: _751f9ce7,
    name: "pricing___ru"
  }, {
    path: "/uk/about",
    component: _5212b36e,
    name: "about___uk"
  }, {
    path: "/uk/contact",
    component: _1ab06441,
    name: "contact___uk"
  }, {
    path: "/uk/events",
    component: _4d5326f0,
    name: "events___uk"
  }, {
    path: "/uk/gallery",
    component: _cfb6631a,
    name: "gallery___uk"
  }, {
    path: "/uk/get-in-touch",
    component: _2f3cfe46,
    name: "get-in-touch___uk"
  }, {
    path: "/uk/maintenance",
    component: _fdb4d598,
    name: "maintenance___uk"
  }, {
    path: "/uk/pricing",
    component: _751f9ce7,
    name: "pricing___uk"
  }, {
    path: "/",
    component: _71ca8e33,
    name: "index___tr"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
