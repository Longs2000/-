import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    // 首屏加载速度很慢
    // 设置路由懒加载
    //   - 使用到了路由页面，再去请求他
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
