<script setup lang="ts">
import { reactive, computed } from 'vue';
import { PostArticle } from '@/types/article';
import { postArticleForm } from '../composable/useArticles';
import { useArticles } from '../composable/useArticles';
import { useRoute } from 'vue-router';
import router from '../router/index';

import MarkdownEditor from '../components/MarkdownEditor.vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';

const { fetchArticleDetail } = useArticles();

interface Props {
  isEdit?: boolean;
}

const props = defineProps<Props>();

let editArticleId: null | string = null;

const form = reactive<PostArticle>({
  title: '',
  content: '',
  perex: null,
  imageId: null,
});

if (props.isEdit) {
  const route = useRoute();
  const article = await fetchArticleDetail(route.params.id);
  form.title = article.title;
  form.content = article.content;
  editArticleId = article.articleId;
}

const formValidation = computed((): boolean => {
  return form.title && form.content ? true : false;
});

function postForm() {
  postArticleForm(form, editArticleId);
}
</script>

<template>
  <form @submit.prevent="postForm">
    <BaseInput v-model="form.title" label="Title" type="text" required />
    <MarkdownEditor v-model="form.content"> </MarkdownEditor>
    <BaseButton custom-class="btn-primary mt-3" type="submit" :disabled="!formValidation">Post article</BaseButton>
  </form>
</template>
