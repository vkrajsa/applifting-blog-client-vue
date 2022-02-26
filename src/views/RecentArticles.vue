<script setup lang="ts">
import ArticleList from '../components/ArticleList.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <ArticleList />
    </template>
    <template #fallback> Articles are downloading...</template>
  </Suspense>
</template>
