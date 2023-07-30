// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "AvocadoHome" */ '@/views/AvocadoHome.vue'),
    meta: {
      title: '首頁｜酪梨鐘'
    }
  },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "AvocadoList" */ '@/views/AvocadoList.vue'),
    meta: {
      title: '事項｜酪梨鐘'
    }
  },
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: "AvocadoSettings" */ '@/views/AvocadoSettings.vue'),
    meta: {
      title: '設定｜酪梨鐘'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 設定我們的路由進入到每一頁後 after each
// function 有兩個可以做，to 和 from 兩個參數
// to 是你要去哪裡
// from 是你從哪裡來
router.afterEach((to, from) => {
  // 我們把網站的 title 改成你要去的那一頁的 meta 的 title
  document.title = to.meta.title
})
export default router
