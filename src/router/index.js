import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import { auth } from '@/store/db'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/release/:userID/:releaseID',
    name: 'release',
    component: () => import(/* webpackChunkName: "release" */ '@/views/release.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '@/views/signup.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
    meta: {
      requiresAuth: true
    },
    children: [
        {
          path: '/',
          redirect: '/dashboard/releases',
        },
        {
          path: 'releases',
          name: 'releases',
          component: () => import(/* webpackChunkName: "releases" */ '@/views/dashboard/releases.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "profile" */ '@/views/dashboard/profile.vue'),
        },
        {
          path: 'payments',
          name: 'payments',
          component: () => import(/* webpackChunkName: "payments" */ '@/views/dashboard/payments.vue'),
        },
        {
          path: 'subscription',
          name: 'subscription',
          component: () => import(/* webpackChunkName: "subscriptions" */ '@/views/dashboard/subscription.vue'),
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import(/* webpackChunkName: "settings" */ '@/views/dashboard/settings.vue'),
        }
      ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
