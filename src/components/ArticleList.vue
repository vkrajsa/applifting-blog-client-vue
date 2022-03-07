<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import ArticlePreview from '../components/ArticlePreview.vue';
import AppPagination from './AppPagination.vue';
import BaseLoader from '../components/base/BaseLoader';
const { articles, fetchArticles, pagination, articleLoader, itemsPerPage, updatePagination } = await useArticles();

function changePage(offset) {
  updatePagination(offset);
}
await fetchArticles();
</script>

<template>
  <AppPagination
    :pagination="pagination"
    :itemsPerPage="itemsPerPage"
    @changePage="changePage"
    :loading="articleLoader"
  />
  <ArticlePreview v-for="article in articles" :key="article.articleId" :article="article" />
</template>
