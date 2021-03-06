import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/pages/Hello'
import Users from '../pages/users'
import Nav from '../components/nav'
import Login from '../pages/login'
import Register from '../pages/register'
import ChangePassword from '../pages/changePassword'
import Forget from '../pages/forget'
import NotFound from '../pages/NotFound.vue'
Vue.use(Router)
/**
 * @param requireAuth: 是否需要在登录之后才能进
 */
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        requireAuth: false
      },
      component: Login
    },
    {
      path: '/',
      // redirect: 'components'
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      meta: {
        requireAuth: true
      },
      component: Users
    },
    {
      path: '/nav',
      name: 'Nav',
      meta: {
        requireAuth: true
      },
      component: Nav
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        requireAuth: false
      },
      component: Register
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      meta: {
        requireAuth: true
      },
      component: ChangePassword
    },
    {
      path: '/forget',
      name: 'Forget',
      meta: {
        requireAuth: false
      },
      component: Forget
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
