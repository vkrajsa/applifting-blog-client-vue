<script setup lang="ts">
import BaseButton from './base/BaseButton.vue';
import { Article } from '@/types/article';
import { blogAuthor } from '../composable/useArticles';
import { routerPush } from '@/router/index';

interface Props {
  article: Article;
}

const props = defineProps<Props>();

function editArticle(): void {
  routerPush('article-edit', { id: props.article.articleId });
}
</script>

<template>
  <tr>
    <td>{{ props.article.title }}</td>
    <td>{{ props.article.perex }}</td>
    <td>{{ blogAuthor }}</td>
    <td>
      <BaseButton @click="editArticle()">EDIT</BaseButton>
      <BaseButton>DELETE</BaseButton>
    </td>
  </tr>
</template>
