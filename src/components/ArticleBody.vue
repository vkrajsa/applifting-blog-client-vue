<script setup lang="ts">
import { Comment } from '@/types/comment';
import ArticleDetail from '../types/ArticleDetail';
import { blogAuthor } from '../composable/useArticles';

interface Props {
  article: ArticleDetail;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="row">
    <div class="col-8">
      <article>
        <h2>{{ props.article.title }}</h2>
        <p>{{ props.article.createdAt }} by {{ blogAuthor }}</p>
        <p>{{ props.article.content }}</p>
      </article>
    </div>
  </div>
</template>
