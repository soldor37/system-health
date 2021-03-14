import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/",
  //   name: "Login",
  //   component: Login,
  // },
  {
    path: '/',
    name: 'Main',
    component: Main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
