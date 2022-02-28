<script setup lang="ts">
import { reactive } from 'vue';
import { PostArticle } from '@/types/article';
import MarkdownEditor from '../components/MarkdownEditor.vue';
import BaseInput from '../components/base/BaseInput.vue';

const form = reactive<PostArticle>({
  title: '',
  content: '',
  perex: null,
  imageId: null,
});
</script>

<template>
  <form @submit.prevent="postForm">
    <BaseInput v-model="form.title" label="Title" type="text" required />
    <MarkdownEditor v-model="form.content"> </MarkdownEditor>
  </form>
</template>
