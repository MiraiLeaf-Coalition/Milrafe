<script setup>
import { ref, provide, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeIndex = ref('/')
watch(
  () => route.path,
  (newPath) => {
    // 只更新父路径部分
    if (newPath.startsWith('/CodeDepository')) {
      activeIndex.value = '/CodeDepository'
    } else {
      activeIndex.value = newPath
    }
  },
  { immediate: true }
)
const updateActiveIndex = (key) => {
  activeIndex.value = key
  console.log('菜单选择:', key)
}
provide('activeIndex', activeIndex)
provide('updateActiveIndex', updateActiveIndex)
</script>

<template>
    <div class="container">
        <el-container>
            <!-- 顶部导航栏，固定在顶部 -->
            <el-affix>
                <el-header class="header">
                    <el-menu
                    class="el-menu"
                    :default-active="activeIndex"
                    mode="horizontal"
                    @select="updateActiveIndex"
                    router
                    >
                        <el-menu-item index="/Home">首页</el-menu-item>
                        <el-menu-item index="/CodeDepository">一点点想法</el-menu-item>
                    </el-menu>
                </el-header>
            </el-affix>

            <!-- 主体内容 -->
            <el-main>
                <RouterView :activeIndex="activeIndex"/>
            </el-main>

            <!-- 底部信息栏 -->
             <el-footer class="footer">

             </el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.header {
    background-color: #fff;
    height: 40px;
    padding: 0 20px;
    width: 100%;
}


</style>