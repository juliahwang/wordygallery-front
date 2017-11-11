import Vue from 'vue'
import VueRouter from 'vue-router'
import navigation from '@/components/navigation'
import login from '../components/login'
import signup from '../components/signup'
import gallery from '../components/gallery'
import genre from '../components/genre'

Vue.use(VueRouter)

// Route Setting
export const routes = [
  { path: '/main', component: navigation },
  { path: '/login', component: login },
  { path: '/signup', component: signup },
  { path: '/gallery', component: gallery },
  { path: '/genre', component: genre }
]

// export default new VueRouter({
//   routes: [
//     {
//       path: '/main',
//       name: 'navigation',
//       component: navigation
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: login
//     }
//   ]
// })
