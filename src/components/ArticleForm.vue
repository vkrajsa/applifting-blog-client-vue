<script setup lang="ts">
import { reactive, computed } from 'vue';
import { PostArticle } from '@/types/article';
import { postArticleForm } from '../composable/useArticles';

import MarkdownEditor from '../components/MarkdownEditor.vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';

// const { postArticleForm } = await useArticles();

const form = reactive<PostArticle>({
  title: '',
  content: '',
  perex: null,
  imageId: null,
});

const formValidation = computed((): boolean => {
  return form.title && form.content ? true : false;
});

async function postForm() {
  postArticleForm(form);
}
</script>

<template>
  <form @submit.prevent="postForm">
    <BaseInput v-model="form.title" label="Title" type="text" required />
    <MarkdownEditor v-model="form.content"> </MarkdownEditor>
    <BaseButton custom-class="btn-primary mt-3" type="submit" :disabled="!formValidation">Post article</BaseButton>
  </form>
</template>
