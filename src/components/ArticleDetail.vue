<script setup lang="ts">
import { provide, ref, reactive } from 'vue';
import { useArticles } from '../composable/useArticles';
import { useRoute } from 'vue-router';
import { Comment } from '@/types/comment';
import ArticleBody from '../components/ArticleBody.vue';
import ArticleComments from '../components/ArticleComments.vue';
import router from '../router/index';

const route = useRoute();
const { fetchArticleDetail, articleDetail } = await useArticles();

const article = await fetchArticleDetail(route.params.id);

const comments = ref<Comment[]>(article.comments);

provide('comments', comments);
provide('articleId', article.articleId);
</script>

<template>
  <ArticleBody :article="article" />
  <ArticleComments />
</template>
