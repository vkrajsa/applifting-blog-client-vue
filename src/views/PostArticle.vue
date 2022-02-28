<script setup>
import ArticleForm from '../components/ArticleForm';
</script>
<template>
  <Suspense>
    <template #default>
      <ArticleForm />
    </template>
    <template #fallback> Article form is downloading...</template>
  </Suspense>
</template>
