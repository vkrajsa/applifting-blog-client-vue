<script setup lang="ts">
import BaseButton from './base/BaseButton.vue';
import { Article } from '@/types/article';
import { blogAuthor } from '../composable/useArticles';
import { routerPush } from '@/router/index';
import { useArticles } from '../composable/useArticles';

// const { destroyArticle, updateArticle } = await useArticles();

interface Props {
  article: Article;
}

interface Emits {
  (e: 'remove-article', id: string): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

function editArticle(): void {
  routerPush('article-edit', { id: props.article.articleId });
}

function deleteArticle(): void {
  emit('remove-article', props.article.articleId);
}
</script>

<template>
  <tr>
    <td>{{ props.article.title }}</td>
    <td>{{ props.article.perex }}</td>
    <td>{{ blogAuthor }}</td>
    <td class="text-center">
      <fa-icon icon="pen" class="action-icon mx-2" @click="editArticle()" />
      <fa-icon icon="trash" class="action-icon mx-2" @click="deleteArticle()" />
    </td>
  </tr>
</template>
