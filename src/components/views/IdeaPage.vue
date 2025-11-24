<!-- src/views/IdeaPage.vue -->
<template>
    <div class="ideachi-page">
      <h2>灵感池🕳</h2>
      <div class="idea-content">
        <!-- 这里写灵感池的具体内容 -->
        <el-input class="idea-input" type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" v-model="ideaText" placeholder="快来记录新灵感~"></el-input>
        <el-button class="add-idea-btn" type="primary" @click="addIdea">添加灵感</el-button>
        
        <div class="idea-list">
          <ul >
            <li v-for="(item, index) in ideaList" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 示例：灵感列表数据
  const ideaText = ref('')
  const ideaList = ref([ '优化灵感池UI,论文模板格式页面（页面提交，打印页面）'])
  
  // 添加灵感的方法
  const addIdea = () => {
    if (ideaText.value) {
      ideaList.value.push(ideaText.value)
      ideaText.value = ''
    }
  }
  </script>
  
  <style scoped>
  .ideachi-page {
    padding: 20px;
  }
  .idea-content {
    margin-top: 20px;
    width: 300px;
  }
  .add-idea-btn {
    margin-top: 10px;
    margin-left: 210px;
  }
  .idea-list {
    margin-top: 15px;
    /* padding-left: 10px; */
  }
  .idea-list li {
    margin: 8px 0;
    line-height: 1.6;
  }
  </style>