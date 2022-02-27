<script setup lang="ts">
import { inject } from 'vue';
import BaseInput from '../components/base/BaseInput.vue';
import BaseButton from '../components/base/BaseButton.vue';
// import BaseError from '../components/base/BaseError.vue';
import { CommentForm } from '../types/comment';
import { useComment } from '../composable/useComment';
import { reactive } from 'vue';

const { addComment } = useComment();
const articleId = inject('articleId');

const form = reactive<CommentForm>({
  author: '',
  content: '',
});

async function postForm() {
  addComment({ articleId, ...form });
}
</script>

<template>
  <div>comment form</div>

  <form class="card p-5" @submit.prevent="postForm">
    <BaseInput v-model="form.author" label="author" type="text" required />
    <BaseInput v-model="form.content" label="text" :rows="50" :textarea="true" required />
    <BaseButton custom-class="btn-primary mt-3" type="submit" :disabled="!form.author || !form.content"
      >Add comment</BaseButton
    >
  </form>
</template>
