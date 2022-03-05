<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import AdminTableRow from './AdminTableRow.vue';

const { articles, fetchArticles, destroyArticle, updateArticles } = await useArticles();
await fetchArticles();

const removeArticle = async (id: string) => {
  const result = await destroyArticle(id);
  if (result) {
    updateArticles(id);
  }
};
</script>

<template>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Article title</th>
          <th scope="col">Perex</th>
          <th scope="col">Author</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <AdminTableRow
          v-for="article in articles"
          :key="article.articleId"
          :article="article"
          @remove-article="removeArticle"
        />
      </tbody>
    </table>
  </div>
</template>
