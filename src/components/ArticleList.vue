<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import ArticlePreview from '../components/ArticlePreview.vue';

const { articles, fetchArticles } = await useArticles();

await fetchArticles();
</script>

<template>
  <ArticlePreview v-for="article in articles" :key="article.articleId" :article="article" />
</template>
