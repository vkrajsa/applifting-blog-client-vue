<script setup lang="ts">
import ArticleList from '../components/ArticleList.vue';
import ArticleListSkeleton from '../components/ArticleListSkeleton.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <ArticleList />
    </template>
    <template #fallback> <ArticleListSkeleton /> </template>
  </Suspense>
</template>
