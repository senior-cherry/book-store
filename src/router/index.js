import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import CatalogView from "../views/CatalogView.vue";
import NewsView from "../views/NewsView.vue";
import BasketView from "../views/BasketView.vue";
import AuthView from "../views/AuthView";
import ProfileView from "../views/ProfileView.vue";
import Create from "../views/Create.vue";
import {projectAuth} from "@/firebase/config";
import AdminView from "../views/AdminView.vue";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'auth' })
  } else {
    next()
  }
}

const requireAdminRights = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user.isAdmin) {
    next({ name: 'admin' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
    beforeEnter: requireAuth
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: requireAdminRights
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

