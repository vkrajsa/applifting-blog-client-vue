<script setup lang="ts">
import ArticleDetail from '../types/ArticleDetail';
import { blogAuthor } from '../composable/useArticles';
import { marked } from 'marked/src/marked.js';

interface Props {
  article: ArticleDetail;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="row">
    <div class="col-12">
      <article class="container">
        <h2>{{ props.article.title }}</h2>
        <p>{{ props.article.createdAt }} by {{ blogAuthor }}</p>
        <div v-html="marked(props.article.content)"></div>
      </article>
    </div>
  </div>
</template>

<style scoped>
article {
  margin: 0 auto;
  max-width: 600px;
  word-wrap: break-word;
}
</style>
