<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import ArticlePreview from '../components/ArticlePreview.vue';
import AppPagination from './AppPagination.vue';
import AppSidebar from './AppSidebar.vue';
import BaseLoader from '../components/base/BaseLoader';
const { articles, fetchArticles, pagination, articleLoader, itemsPerPage, updatePagination } = await useArticles();

function changePage(offset) {
  updatePagination(offset);
}
await fetchArticles();
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <ArticlePreview v-for="article in articles" :key="article.articleId" :article="article" />
      <AppPagination
        :pagination="pagination"
        :itemsPerPage="itemsPerPage"
        @changePage="changePage"
        :loading="articleLoader"
      />
    </div>
    <AppSidebar />
  </div>
</template>
