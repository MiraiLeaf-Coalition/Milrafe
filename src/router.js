import { createRouter, createWebHistory } from 'vue-router'
// 导入父组件
import Home from './components/Home.vue'
import CodeDepository from './components/CodeDepository(css).vue'

// 导入子组件
import Button from './components/views/button.vue'


const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/CodeDepository',
    name: '一点点想法',
    component: CodeDepository,
    children: [
      {
        path: 'button',
        name: '按钮',
        component: Button
      },
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 导出路由实例
export default router