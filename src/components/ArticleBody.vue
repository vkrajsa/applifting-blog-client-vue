<script setup lang="ts">
import ArticleDetail from '../types/ArticleDetail';
import { blogAuthor } from '../composable/useArticles';
import BaseLoader from '../components/base/BaseLoader.vue';
import BaseImage from '../components/base/BaseImage.vue';
import ImagePlaceholder from '../components/ImagePlaceholder.vue';
import { useImage } from '../composable/useImage';

import { marked } from 'marked/src/marked.js';

interface Props {
  article: ArticleDetail;
}

const props = defineProps<Props>();

const { imageUrl, downloadImage, imageLoader } = await useImage();

downloadImage(props.article.imageId);
</script>

<template>
  <div class="row">
    <div class="image-container col-12 p-0">
      <ImagePlaceholder v-if="imageLoader" width="100%" height="300">
        <BaseLoader color="text-light" />
      </ImagePlaceholder>
      <BaseImage v-else :url="imageUrl" width="100%" height="300" backgroundSize="contain" />
    </div>
    <div class="col-12">
      <article>
        <h2 class="mt-4">{{ props.article.title }}</h2>
        <p>{{ props.article.createdAt }} by {{ blogAuthor }}</p>
        <div v-html="marked(props.article.content)"></div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.image-container,
article {
  margin: 0 auto;
  max-width: 800px;
  word-wrap: break-word;
}
</style>
