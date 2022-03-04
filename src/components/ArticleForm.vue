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
const { loader, imageUrl, downloadImage, removeImage, error } = useImage();

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

const imageSelected = ref<Image>(null);
const imageUploaded = computed(() => {
  return form.imageId;
});

const getFile = (file: File) => {
  imageSelected.value = file;
};

if (props.isEdit) {
  const route = useRoute();
  const article = await fetchArticleDetail(route.params.id);

  form.title = article.title;
  form.content = article.content;
  form.imageId = article.imageId;
  form.perex = article.perex;
  editArticleId = article.articleId;

  // TODO: get rid of await and use watcheffect and lazy load the image
  // User might be in edit mode and imageId can be null
  if (article.imageId) {
    await downloadImage(article.imageId);
  }
}

const formValidation = computed((): boolean => {
  return form.title && form.content && form.perex && imageUploaded.value ? true : false;
});

async function uploadImage() {
  const data = new FormData();
  data.append('image', imageSelected.value);

  try {
    const uploadedImage = await postImg(data);

    form.imageId = uploadedImage.data[0].imageId;

    dispatchNotification(200, 'Image uploaded to the server. Click publish to save article changed.');
  } catch (error) {
    dispatchNotification(undefined, 'Error while uploading image');
  }
}

async function deleteImage() {
  try {
    await removeImage(form.imageId);

    form.imageId = null;

    dispatchNotification(200, 'Image deleted from the server.');
  } catch (error) {
    dispatchNotification(undefined, 'Error while deleting image');
  }
}

async function postForm() {
  await postArticleForm(form, editArticleId);
  // I handle errors in composable, i should probaly delete Image if uploaded, if the post form fails for some reason.
}
</script>

<template>
  <form @submit.prevent="postForm">
    <BaseInput v-model="form.title" label="Title" type="text" required />
    <BaseInput v-model="form.perex" label="Perex" type="text" required />
    <BaseButton v-if="!imageUploaded" custom-class="btn-success mt-3" @click="uploadImage()" :disabled="!imageSelected"
      >Upload image</BaseButton
    >
    <BaseButton v-if="imageUploaded" custom-class="btn-danger mt-3" @click="deleteImage()">Delete image</BaseButton>
    <ImageUpload @getFile="getFile" :fetchedImage="imageUrl" :error="error"></ImageUpload>
    <MarkdownEditor v-model="form.content"> </MarkdownEditor>
    <BaseButton custom-class="btn-primary mt-3" type="submit" :disabled="formValidation == false"
      >Post article</BaseButton
    >
  </form>
</template>
