<script setup lang="ts">
import { provide } from 'vue';
import { useArticles } from '../composable/useArticles';
import { useRoute } from 'vue-router';
import ArticleBody from '../components/ArticleBody.vue';
import ArticleComments from '../components/ArticleComments.vue';
import router from '../router/index';

const route = useRoute();
const { fetchArticleDetail, articleDetail } = await useArticles();

const article = await fetchArticleDetail(route.params.id);

provide('articleId', article.articleId);
</script>

<template>
  <ArticleBody :article="article" />
  <ArticleComments :comments="article.comments" />
</template>
