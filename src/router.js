import { createRouter, createWebHistory } from 'vue-router'
// 导入父组件
import Home from './components/Home.vue'
import CodeDepository from './components/CodeDepository(css).vue'

// 导入子组件
import Button from './components/views/button.vue'
import IdeaPage from './components/views/IdeaPage.vue'
import Word from './components/views/Word.vue'
import WordEdit from './components/views/WordEdit.vue'



const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/idea',
    name: '灵感池',
    component: IdeaPage,
    children: [
      {
        path: 'button',
        name: '按钮',
        component: Button
      },
    ]
  },
  {
    path:'/word',
    name:'文档',
    component:Word,
    children:[
      {
        path:'/wordEdit',
        name:'文档编辑',
        component:WordEdit
      }
    ]
  },

]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 导出路由实例
export default router