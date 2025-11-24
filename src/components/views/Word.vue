<!-- src/components/views/Word.vue -->
<script setup>
//导入依赖
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//导入组件



const router = useRouter()
const activeIndex = ref('/wordEdit')

const wordName = ref('')
</script>

<template>
    <div class="word-page">
        <h2>文档</h2>
        <p>功能：论文模板格式页面（页面提交，打印页面）</p>
        <el-button class="edit-word" type="primary" @click="editWord">新建文档</el-button>
        <div class="word-content">
            <el-input>
                placeholder="请输入文档名称"
            </el-input>
            <el-button class="search-word" type="primary">搜索</el-button>
        </div>
    </div>
</template>



<style scoped>
.word-page {
    padding: 20px;
}
.word-content {
    display: flex;
    align-items: center;
}
.edit-word {
    margin-bottom: 10px;
}
.search-word {
    margin-left: 10px;
}
</style>