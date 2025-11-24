<script setup>
// 导入依赖
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 导入组件
import Home from './components/Home.vue'
import IdeaPage from './components/views/IdeaPage.vue'



// 获取路由对象
const route = useRoute()
const activeIndex = ref('/Home')

// 监听路由变化，更新 activeIndex
watch(
  () => route.path,
  (newPath) => {
    activeIndex.value = newPath
  },
  { immediate: true }
)
// 菜单选择事件
const handleSelect = (key) => {
  console.log('菜单选择:', key)
}
</script>

<template>
    <div class="container">
        <el-container>
            <!-- 顶部导航栏，固定在顶部 -->
            <el-affix>
                <el-header class="header">
                    <el-menu
                    class="el-menu"
                    :default-active="$route.path"
                    mode="horizontal"
                    @select="handleSelect"
                    router="true"
                    >
                        <el-menu-item index="/Home">首页</el-menu-item>
                        <el-menu-item index="/idea">灵感池</el-menu-item>
                        <el-menu-item index="/achieve">实现</el-menu-item>
                        <el-menu-item index="/answer">Q & A</el-menu-item>
                        <el-menu-item index="/word">文档</el-menu-item>
                
                    </el-menu>
                </el-header>
            </el-affix>

            <!-- 主体内容 -->
            <el-main>
                <RouterView />

            </el-main>

            <!-- 底部信息栏 -->
             <el-footer class="footer">

             </el-footer>
        </el-container>
    </div>
    <TodoList />
</template>

<style scoped>
.header {
    background-color: #fff;
    height: 40px;
    padding: 0 20px;
    width: 100%;
}


</style>