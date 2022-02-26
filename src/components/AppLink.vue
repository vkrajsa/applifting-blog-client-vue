<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import ArticlePreview from '../components/ArticlePreview.vue';
import { AppRouteNames } from '../router/index';
import type { RouteParams } from 'vue-router';

interface Props {
  name: AppRouteNames;
  params?: RouteParams;
}

const props = defineProps<Props>();
</script>

<template>
  <router-link :to="props">
    <slot />
  </router-link>
</template>
