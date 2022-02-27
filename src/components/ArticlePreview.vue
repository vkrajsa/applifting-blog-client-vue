<script setup lang="ts">
import { Article } from '@/types/article';
import AppLink from '../components/AppLink.vue';
import { blogAuthor } from '../composable/useArticles';

interface Props {
  article: Article;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="" class="img-fluid rounded-start" alt="" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <!-- TODO: ADD AUTHOR -->
          {{ blogAuthor }}
          <p class="card-text">
            <small class="text-muted">Created at {{ article.createdAt }}</small>
          </p>
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text">
            {{ article.perex }}
          </p>

          <AppLink name="article-detail" :params="{ id: article.articleId }">Read more</AppLink>

          <!-- <AppLink @click="routerPush('article-detail', { id: article.articleId })">Read more</AppLink> -->
          <!-- TODO: ADD COMMENTS -->
          <!-- TODO: ADD DETAIL LINK -->
        </div>
      </div>
    </div>
  </div>
</template>
