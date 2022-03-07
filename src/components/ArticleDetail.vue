<script setup lang="ts">
import { provide, ref, reactive } from 'vue';
import { useArticles } from '../composable/useArticles';
import { useRoute } from 'vue-router';
import { Comment } from '@/types/comment';
import ArticleBody from '../components/ArticleBody.vue';
import ArticleCommentList from '../components/ArticleCommentList.vue';
import router from '../router/index';
import { sortByDate } from '../utils/date';

const route = useRoute();
const { fetchArticleDetail, articleDetail } = await useArticles();

const article = await fetchArticleDetail(route.params.id);

const comments = ref<Comment[]>(sortByDate(article.comments));

provide('comments', comments);
provide('articleId', article.articleId);
</script>

<template>
  <ArticleBody :article="article" />
  <ArticleCommentList />
</template>
