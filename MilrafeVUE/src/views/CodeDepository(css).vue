<script setup>
import { ref, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeIndex = inject('activeIndex')
const updateActiveIndex = inject('updateActiveIndex')
watch(
  () => route.path,
  (newPath) => {
    // 确保只更新父路径部分
    if (newPath.startsWith('/CodeDepository')) {
      activeIndex.value = '/CodeDepository'
    } else {
      activeIndex.value = newPath
    }
  },
  { immediate: true }
)
const handleSelect = (key) => {
  // 更新 activeIndex 为父路径
  if (key.startsWith('/CodeDepository')) {
    updateActiveIndex('/CodeDepository')
  } else {
    updateActiveIndex(key)
  }
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
                        :default-active="route.path"
                        class="el-menu"
                        @select="handleSelect"
                        router
                    >
                        <el-menu-item index="/CodeDepository/button">
                            按钮
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