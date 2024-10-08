import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import CatalogView from "../views/CatalogView.vue";
import BlogView from "../views/BlogView.vue";
import BasketView from "../views/BasketView.vue";
import AuthView from "../views/AuthView";
import ProfileView from "../views/ProfileView.vue";
import Create from "../views/Create.vue";
import {projectAuth} from "@/firebase/config";
import AdminView from "../views/AdminView.vue";
import Genre from "../views/Genre.vue";
import SingleBook from "../components/SingleBook.vue";
import CreatePost from "../views/CreatePost.vue";
import SinglePost from "../components/SinglePost.vue";
import NotFound from "../components/NotFound";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'auth' })
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
    path: '/details/:book',
    name: 'book',
    component: SingleBook
  },
  {
    path: '/genres/:genre',
    name: 'genre',
    component: Genre
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:post',
    name: 'post',
    component: SinglePost
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView,
    beforeEnter: requireAuth
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
    path: '/createPost',
    name: 'createPost',
    component: CreatePost,
    beforeEnter: requireAuth
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: requireAuth
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

