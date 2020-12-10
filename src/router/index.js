import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Handphone from '../views/Handphone.vue'
import Laptop from '../views/Laptop.vue'
import Login from '../views/user/Login.vue'
import Pakaian from '../views/Pakaian.vue'
import Register from '../views/user/Register.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'



Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/pakaian',
      name: 'Pakaian',
      component: Pakaian
    },
    {
      path: '/handphone',
      name: 'Handphone',
      component: Handphone
    },
    {
      path: '/laptop',
      name: 'Laptop',
      component: Laptop
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router
