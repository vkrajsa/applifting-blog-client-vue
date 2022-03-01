<script setup lang="ts">
import BaseButton from './base/BaseButton.vue';
import { Article } from '@/types/article';
import { blogAuthor } from '../composable/useArticles';
import { routerPush } from '@/router/index';

interface Props {
  article: Article;
}

const props = defineProps<Props>();
</script>

<template>
  <tr>
    <td>{{ props.article.title }}</td>
    <td>{{ props.article.perex }}</td>
    <td>{{ blogAuthor }}</td>
    <td>
      <BaseButton>EDIT</BaseButton>
      <BaseButton>DELETE</BaseButton>
    </td>
  </tr>
</template>
