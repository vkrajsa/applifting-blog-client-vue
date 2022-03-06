<script setup lang="ts">
import { Article } from '@/types/article';
import AppLink from '../components/AppLink.vue';
import BaseLoader from '../components/base/BaseLoader.vue';
import BaseImage from '../components/base/BaseImage.vue';
import BaseButton from '../components/base/BaseButton.vue';
import { dateFormat } from '../utils/date-format';

import ImagePlaceholder from '../components/ImagePlaceholder.vue';
import { useImage } from '../composable/useImage';

interface Props {
  article: Article;
}

const { imageUrl, downloadImage, imageLoader } = await useImage();

const props = defineProps<Props>();
// ommiting await here, i will display placeholder image
downloadImage(props.article.imageId);
</script>

<template>
  <div class="row justify-content-center mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col-auto d-none d-lg-block">
          <ImagePlaceholder v-if="imageLoader" width="200" height="200">
            <BaseLoader color="text-light" />
          </ImagePlaceholder>
          <BaseImage v-else :url="imageUrl" width="200" height="200" />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ article.title }}</h3>
          <div class="mb-1 text-muted">{{ dateFormat(article.createdAt) }}</div>
          <p class="card-text mb-auto">
            {{ article.perex }}
          </p>
          <AppLink name="article" :params="{ id: article.articleId }" class="d-flex justify-content-end"
            ><BaseButton class="btn-success"> READ MORE </BaseButton></AppLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
