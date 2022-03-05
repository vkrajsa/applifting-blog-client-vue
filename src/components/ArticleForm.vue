<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { PostArticle } from '@/types/article';
import { useArticles } from '../composable/useArticles';
import { useImage } from '../composable/useImage';
import { useRoute } from 'vue-router';
import { dispatchNotification } from '../utils/notification';
import router from '../router/index';

import MarkdownEditor from '../components/MarkdownEditor.vue';
import ImageUpload from '../components/ImageUpload.vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';

const { fetchArticleDetail, postArticleForm, articleLoader } = useArticles();
const { postImage, loader, imageUrl, downloadImage, deleteImage, error } = useImage();

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

const imageValidation = computed((): boolean => {
  return !!imageUploaded.value;
});

async function uploadImage() {
  const data = new FormData();
  data.append('image', imageSelected.value);

  const uploadedImage = await postImage(data);

  if (uploadedImage) {
    form.imageId = uploadedImage.data[0].imageId;
  }
}

async function removeImage() {
  const imageDeleted = await deleteImage(form.imageId);
  if (imageDeleted) {
    form.imageId = null;
    imageSelected.value = null;
  }
}

function postForm() {
  if (!imageValidation.value) {
    dispatchNotification(undefined, 'You need to upload the image');
    return;
  }
  postArticleForm(form, editArticleId);
  // I handle errors in composable, i should probaly delete Image if uploaded, if the post form fails for some reason.
}
</script>

<template>
  <form @submit.prevent="postForm">
    <BaseButton class="btn-primary mb-3 float-end" type="submit" :loader="articleLoader"> Publish article</BaseButton>
    <BaseInput class="col col-md-6" v-model="form.title" label="Title" type="text" required />
    <BaseInput class="col col-md-6" v-model="form.perex" label="Perex" type="text" required />

    <ImageUpload @getFile="getFile" :fetchedImage="imageUrl" :imageSelected="imageSelected">
      <BaseButton
        v-if="!imageUploaded"
        class="btn-success mt-3"
        @click="uploadImage()"
        :loader="loader"
        :disabled="!imageSelected"
      >
        Upload image</BaseButton
      >
      <BaseButton v-if="imageUploaded" class="btn-danger mt-3" @click="removeImage()" :loader="loader">
        Delete image
      </BaseButton>
    </ImageUpload>

    <MarkdownEditor v-model="form.content"> </MarkdownEditor>
  </form>
</template>
