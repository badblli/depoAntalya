import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _139b34a0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _c7c53e1a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _33530f65 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _48de1196 = () => interopDefault(import('..\\pages\\events.vue' /* webpackChunkName: "pages/events" */))
const _1991cb25 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _c11eb92a = () => interopDefault(import('..\\pages\\get-in-touch.vue' /* webpackChunkName: "pages/get-in-touch" */))
const _5580e8e6 = () => interopDefault(import('..\\pages\\maintenance.vue' /* webpackChunkName: "pages/maintenance" */))
const _12e6ccce = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))

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
    component: _139b34a0,
    name: "about___tr"
  }, {
    path: "/contact",
    component: _c7c53e1a,
    name: "contact___tr"
  }, {
    path: "/de",
    component: _33530f65,
    name: "index___de"
  }, {
    path: "/en",
    component: _33530f65,
    name: "index___en"
  }, {
    path: "/events",
    component: _48de1196,
    name: "events___tr"
  }, {
    path: "/gallery",
    component: _1991cb25,
    name: "gallery___tr"
  }, {
    path: "/get-in-touch",
    component: _c11eb92a,
    name: "get-in-touch___tr"
  }, {
    path: "/maintenance",
    component: _5580e8e6,
    name: "maintenance___tr"
  }, {
    path: "/pricing",
    component: _12e6ccce,
    name: "pricing___tr"
  }, {
    path: "/ru",
    component: _33530f65,
    name: "index___ru"
  }, {
    path: "/uk",
    component: _33530f65,
    name: "index___uk"
  }, {
    path: "/de/about",
    component: _139b34a0,
    name: "about___de"
  }, {
    path: "/de/contact",
    component: _c7c53e1a,
    name: "contact___de"
  }, {
    path: "/de/events",
    component: _48de1196,
    name: "events___de"
  }, {
    path: "/de/gallery",
    component: _1991cb25,
    name: "gallery___de"
  }, {
    path: "/de/get-in-touch",
    component: _c11eb92a,
    name: "get-in-touch___de"
  }, {
    path: "/de/maintenance",
    component: _5580e8e6,
    name: "maintenance___de"
  }, {
    path: "/de/pricing",
    component: _12e6ccce,
    name: "pricing___de"
  }, {
    path: "/en/about",
    component: _139b34a0,
    name: "about___en"
  }, {
    path: "/en/contact",
    component: _c7c53e1a,
    name: "contact___en"
  }, {
    path: "/en/events",
    component: _48de1196,
    name: "events___en"
  }, {
    path: "/en/gallery",
    component: _1991cb25,
    name: "gallery___en"
  }, {
    path: "/en/get-in-touch",
    component: _c11eb92a,
    name: "get-in-touch___en"
  }, {
    path: "/en/maintenance",
    component: _5580e8e6,
    name: "maintenance___en"
  }, {
    path: "/en/pricing",
    component: _12e6ccce,
    name: "pricing___en"
  }, {
    path: "/ru/about",
    component: _139b34a0,
    name: "about___ru"
  }, {
    path: "/ru/contact",
    component: _c7c53e1a,
    name: "contact___ru"
  }, {
    path: "/ru/events",
    component: _48de1196,
    name: "events___ru"
  }, {
    path: "/ru/gallery",
    component: _1991cb25,
    name: "gallery___ru"
  }, {
    path: "/ru/get-in-touch",
    component: _c11eb92a,
    name: "get-in-touch___ru"
  }, {
    path: "/ru/maintenance",
    component: _5580e8e6,
    name: "maintenance___ru"
  }, {
    path: "/ru/pricing",
    component: _12e6ccce,
    name: "pricing___ru"
  }, {
    path: "/uk/about",
    component: _139b34a0,
    name: "about___uk"
  }, {
    path: "/uk/contact",
    component: _c7c53e1a,
    name: "contact___uk"
  }, {
    path: "/uk/events",
    component: _48de1196,
    name: "events___uk"
  }, {
    path: "/uk/gallery",
    component: _1991cb25,
    name: "gallery___uk"
  }, {
    path: "/uk/get-in-touch",
    component: _c11eb92a,
    name: "get-in-touch___uk"
  }, {
    path: "/uk/maintenance",
    component: _5580e8e6,
    name: "maintenance___uk"
  }, {
    path: "/uk/pricing",
    component: _12e6ccce,
    name: "pricing___uk"
  }, {
    path: "/",
    component: _33530f65,
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
