<script setup lang="ts">
import ArticleDetail from '../components/ArticleDetail.vue';
</script>

<template>
  <!-- HACK, I CAN USE THE ASYNC ONLY IF THE COMPONENT IS WRAPPED IN SUSPENSE -->
  <Suspense>
    <template #default>
      <ArticleDetail />
    </template>
    <template #fallback> Articles is downloadin....</template>
  </Suspense>
</template>
