<script setup>
import ArticleForm from '../components/ArticleForm';

import BaseLoader from '../components/base/BaseLoader';
</script>
<template>
  <!-- must use suspense if there is top level await inside of a component (ArticleForm) -->
  <Suspense>
    <template #default>
      <ArticleForm :isEdit="true" />
    </template>
    <template #fallback> <BaseLoader :button="false" /></template>
  </Suspense>
</template>
