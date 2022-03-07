<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import AdminTableRow from './AdminTableRow.vue';
import AppPagination from './AppPagination.vue';

const {
  articles,
  fetchArticles,
  destroyArticle,
  updateArticles,
  articleLoader,
  itemsPerPage,
  pagination,
  updatePagination,
} = await useArticles();

// TODO: user should be able to select how many items he wants to display on page
itemsPerPage.value = 10;
pagination.value.limit = 10;

await fetchArticles();

function changePage(offset) {
  updatePagination(offset);
}

const removeArticle = async (id: string) => {
  const result = await destroyArticle(id);
  if (result) {
    updateArticles(id);
  }
};
</script>

<template>
  <AppPagination
    :pagination="pagination"
    :itemsPerPage="itemsPerPage"
    @changePage="changePage"
    :loading="articleLoader"
  />
  <div class="table-responsive" v-if="!articleLoader">
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
