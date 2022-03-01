<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import ArticleTableRow from './ArticleTableRow.vue';

const { articles, fetchArticles } = await useArticles();

await fetchArticles();
</script>

<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Article title</th>
          <th scope="col">Perex</th>
          <th scope="col">Author</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <ArticleTableRow v-for="article in articles" :key="article.articleId" :article="article" />
    </table>
  </div>
</template>
