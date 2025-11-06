<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 获取路由对象
const route1 = useRoute()
const activeIndex = ref('/CodeDepository/button')

// 监听路由变化，更新 activeIndex
watch(
  () => route1.path,
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
    <!-- 主要内容 -->
    <div class="container">
        <el-container class="el-container">
            <el-main class="main">
                <!-- 左侧侧边栏 -->
                <el-col :span="12">
                    <h3>类别 Type</h3>
                    <el-menu
                        :default-active="$route.path"
                        class="el-menu"
                        @select="handleSelect"
                        router="true"
                    >
                        <el-menu-item index="button">
                            <
                        </el-menu-item>
                    </el-menu>
                </el-col>

                <!-- 右侧内容 -->
                    <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.container {
    max-width: 75%;
    margin: 0 auto;
}
.main {
    padding: 20px;
    display: flex;
    max-width: 40%;
}
.el-menu {
    border-right: solid #eee;
    min-height: 360px;
    background-color: #fff;
}
</style>