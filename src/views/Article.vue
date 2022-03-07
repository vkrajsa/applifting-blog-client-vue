<script setup lang="ts">
import ArticleDetail from '../components/ArticleDetail.vue';
import BaseLoader from '../components/base/BaseLoader';
</script>

<template>
  <!-- HACK, I CAN USE THE ASYNC ONLY IF THE COMPONENT IS WRAPPED IN SUSPENSE -->
  <Suspense>
    <template #default>
      <ArticleDetail />
    </template>
    <template #fallback> <BaseLoader :button="false" /></template>
  </Suspense>
</template>
