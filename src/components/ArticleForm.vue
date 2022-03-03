<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { PostArticle } from '@/types/article';
import { postImg } from '@/services/image';
import { dispatchNotification } from '../utils/notification';
import { postArticleForm, useArticles } from '../composable/useArticles';
import { useImage } from '../composable/useImage';
import { useRoute } from 'vue-router';
import router from '../router/index';

import MarkdownEditor from '../components/MarkdownEditor.vue';
import ImageUpload from '../components/ImageUpload.vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';

const { fetchArticleDetail } = useArticles();
const { loader, imageUrl, downloadImage } = useImage();

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

const fileImage = ref<Image>(null);

const getFile = (file: File) => {
  fileImage.value = file;
};

if (props.isEdit) {
  const route = useRoute();
  const article = await fetchArticleDetail(route.params.id);
  // const fetchImage = await
  form.title = article.title;
  form.content = article.content;
  form.imageId = article.imageId;
  form.perex = article.perex;
  editArticleId = article.articleId;

  // TODO: get rid of await and use watcheffect and lazy load the image
  await downloadImage(article.imageId);
}

const formValidation = computed((): boolean => {
  return form.title && form.content && form.perex && fileImage ? true : false;
});

async function uploadImage() {
  const data = new FormData();
  data.append('image', fileImage.value);

  try {
    return await postImg(data);
  } catch (error) {
    dispatchNotification(undefined, 'Error while uploading image');
  }
}

async function postForm() {
  const uploadedImage = await uploadImage();

  if (!uploadedImage) return;

  form.imageId = uploadedImage.data[0].imageId;

  const result = await postArticleForm(form, editArticleId);
  // I handle errors in composable, i should probaly delete Image if uploaded, if the post form fails for some reason.
}
</script>

<template>
  <form @submit.prevent="postForm">
    <BaseInput v-model="form.title" label="Title" type="text" required />
    <BaseInput v-model="form.perex" label="Perex" type="text" required />
    <ImageUpload @getFile="getFile" :fetchedImage="imageUrl"></ImageUpload>
    <MarkdownEditor v-model="form.content"> </MarkdownEditor>
    <BaseButton custom-class="btn-primary mt-3" type="submit" :disabled="!formValidation">Post article</BaseButton>
  </form>
</template>
