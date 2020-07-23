import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from "../components/Foo.vue"
import Mall from '../components/Mall.vue'
import User from '../components/User.vue'
import MallDetail from '../components/Mall-detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/foo'
  },
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/mall',
    component: Mall,
    children:[
      {
        path: ':name',
        component: MallDetail,
        name: 'detail',
      }
    ]
  },
  {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
