<script setup lang="ts">
import { useArticles } from '../composable/useArticles';
import ArticlePreview from '../components/ArticlePreview.vue';
import { AppRouteNames, RouteParams } from '../types/routes';
import { useAttrs } from 'vue';

interface AppLink {
  name: AppRouteNames;
  params?: RouteParams;
}

const props = defineProps<AppLink>();
</script>

<template>
  <router-link :to="props" v-bind="attrs">
    <slot />
  </router-link>
</template>
