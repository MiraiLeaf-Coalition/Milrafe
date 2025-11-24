<script setup>
//导入依赖
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//导入组件



const router = useRouter()

const wordName = ref('')
</script>

<template>
    <div class="word-edit-page">
        <h2>文档编辑</h2>
    </div>
</template>

<style scoped>

</style>

