<script setup lang="ts">
import ArticleContent from '../components/ArticleContent.vue';
</script>

<template>
  <!-- HACK, I CAN USE THE ASYNC ONLY IF THE COMPONENT IS WRAPPED IN SUSPENSE -->
  <Suspense>
    <template #default>
      <ArticleContent />
    </template>
    <template #fallback> Articles is downloadin....</template>
  </Suspense>
</template>
