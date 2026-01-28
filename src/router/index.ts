import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import BlogList from '../pages/BlogList.vue'
import BlogPost from '../pages/BlogPost.vue'
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
