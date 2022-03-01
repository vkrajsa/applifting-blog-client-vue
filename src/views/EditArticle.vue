<script setup>
import ArticleForm from '../components/ArticleForm';
</script>
<template>
  <!-- must use suspense if there is top level await inside of a component (ArticleForm) -->
  <Suspense>
    <template #default>
      <ArticleForm :edit="true" />
    </template>
    <template #fallback> Articles are downloading...</template>
  </Suspense>
</template>
