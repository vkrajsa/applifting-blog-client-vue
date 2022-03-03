<script setup lang="ts">
import { Article } from '@/types/article';
import AppLink from '../components/AppLink.vue';
import { blogAuthor } from '../composable/useArticles';
import { useImage } from '../composable/useImage';

interface Props {
  article: Article;
}

const { imageUrl, downloadImage } = await useImage();

const props = defineProps<Props>();

// ommiting await here, i will display placeholder image
downloadImage(props.article.imageId);
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4 img-container">
        <img :src="imageUrl" class="img-fluid rounded-start" alt="" width="200" height="200" />
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

          <AppLink name="article" :params="{ id: article.articleId }">Read more</AppLink>

          <!-- <AppLink @click="routerPush('article-detail', { id: article.articleId })">Read more</AppLink> -->
          <!-- TODO: ADD COMMENTS -->
          <!-- TODO: ADD DETAIL LINK -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  height: 200px;
}
img {
  width: 200px;
  height: 200px;
}
</style>
