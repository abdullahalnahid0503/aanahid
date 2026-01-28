<<<<<<< HEAD
import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
=======
import { createRouter, createWebHistory } from 'vue-router'
>>>>>>> 8473ad3aa10fa6a40f8753e6a7286ce360cd2428
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import BlogList from '../pages/BlogList.vue'
import BlogPost from '../pages/BlogPost.vue'
<<<<<<< HEAD
import ISGMList from '../pages/ISGMList.vue'
import ISGMPost from '../pages/ISGMPost.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/blog', name: 'Blog', component: BlogList },
  { path: '/blog/:slug', name: 'BlogPost', component: BlogPost },
  { path: '/guidetomalaysia', name: 'ISGMList', component: ISGMList },
  { 
    path: '/guidetomalaysia/:slug', 
    name: 'ISGMPost', 
    component: ISGMPost,
    props: (route: RouteLocationNormalized) => ({ topic: route.params.slug }) // <-- pass slug as prop
  },
  { path: '/contact', name: 'Contact', component: Contact },
=======
import Contact from '../pages/Contact.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogList
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
>>>>>>> 8473ad3aa10fa6a40f8753e6a7286ce360cd2428
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
<<<<<<< HEAD
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
=======
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
>>>>>>> 8473ad3aa10fa6a40f8753e6a7286ce360cd2428
  }
})

export default router
